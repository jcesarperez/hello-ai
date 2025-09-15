import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const response = await client.responses.create({
    prompt: {
        id: "pmpt_68c7f95e00848193ab85dd1f0fa3538801fd8ddedeed4b8c",
        version: "5",
        variables: {
            name: "Lucia",
            topic: "Famous Software Developers"
        }
    }
});

console.log(response.output_text);