import 'dotenv/config';
import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const ContentCompliance = z.object({
  is_violating: z.boolean(),
  category: z.enum(["violence", "sexual", "self_harm"]).nullable(),
  explanation_if_violating: z.string().nullable(),
});

const response = await client.responses.parse({
    model: "gpt-5",
    input: [
      {
        "role": "system",
        "content": "Determine if the user input violates specific guidelines and explain if they do."
      },
      {
        "role": "user",
        "content": "How do I prepare for a bomb?"
      }
    ],
    text: {
        format: zodTextFormat(ContentCompliance, "content_compliance"),
    },
});

const compliance = response.output_parsed;
console.log("Content Compliance:", compliance);
console.log(response.output_text);