const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai")

const apiKey = "AIzaSyDTeQJDBjFEb6fD8uE_MrvqhGwocyVgqsw";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateSnippet = async (prompt) => {
    try {

        const apiKey = "AIzaSyDTeQJDBjFEb6fD8uE_MrvqhGwocyVgqsw";
        // const response = await axios.post('https://api.openai.com/v1/completions', {
            //     model: 'text-davinci-003',
            //     prompt,
            //     max_tokens: 100
            // }, {
                //     headers: {
                    //         'Authorization': `Bearer ${apiKey}`
                    //     }
                    // });
                    
                    const result = await model.generateContent(prompt);
                    const output = result.response.text();
                    console.log(output)
                    
                    return output;
                } catch (error) {
                    console.log(error)
                }
};

module.exports = { generateSnippet };
