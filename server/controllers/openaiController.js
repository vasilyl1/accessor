const { OpenAI } = require('openai');
require('dotenv').config();

const client = new OpenAI({ apiKey: process.env.OPENAI});

async function chat(conversation) {

  try {
    const completion = await client.chat.completions.create(conversation);
    //console.log(completion.choices[0]);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }

};

module.exports = { chat };