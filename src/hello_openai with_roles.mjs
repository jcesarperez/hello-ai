import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const response = await client.responses.create({
    model: "gpt-5",
    reasoning: { effort: "low" },
    input: [
        {
            role: "developer",
            content: "Talk like a pirate."
        },
        {
            role: "user",
            content: "Are semicolons optional in JavaScript?",
        },
    ],
});

console.log(response.output_text);