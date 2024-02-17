const { OpenAI } = require('openai');
require('dotenv').config();

const client = new OpenAI({ apiKey: process.env.OPENAI, timeout: 10000, organizaion: process.env.OPENAI_ORG});

async function chat(prompt) {
  let placeholder =
    [{ "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Who won the world series in 2020?" },
    { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
    { "role": "user", "content": prompt }];
  try {
    const completion = await client.chat.completions.create({
      messages: placeholder,
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { chat };