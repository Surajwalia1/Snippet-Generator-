// src/components/CodeGenerator.js
import React, { useState } from 'react';
import axios from 'axios';
import './CodeGenerator.css'; // Import the CSS file

const CodeGenerator = () => {
  const [description, setDescription] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token")

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/code/generate', { description }, {
        headers: {
          'Authorization': token
        }
      });
      setGeneratedCode(response.data.codeSnippet);
    } catch (err) {
      console.log(err)
      alert('Error generating code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="code-generator-container">
      <h2 className="title">Generate Code Snippet</h2>
      <textarea
        className="description-input"
        placeholder="Describe the functionality..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="generate-button" onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {generatedCode && (
        <pre className="code-display">
          <code>{generatedCode}</code>
        </pre>
      )}
    </div>
  );
};

export default CodeGenerator;
