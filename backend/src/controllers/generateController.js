const { generateSnippet } = require('../services/openaiService');

exports.generateCode = async (req, res) => {
    const { description } = req.body;
    console.log("description", description)

    if (!description) {
        return res.status(400).json({ message: 'Prompt is required' });
    }

    try {
        const codeSnippet = await generateSnippet(description);
        res.status(200).json({ codeSnippet });
    } catch (error) {
        res.status(500).json({ message: 'Error generating code snippet', error: error.message });
    }
};
