// server.js

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

// Add your Gemini API dependency
const GeminiAPI = require('gemini-api'); // Replace with the actual package name
// You might need to install it: `npm install gemini-api`

// Add your GitHub API dependency
const { Octokit } = require('@octokit/rest'); // Replace with the actual package name
// You might need to install it: `npm install @octokit/rest`


app.use(cors());
app.use(express.json());

// Route for Gemini API calls
app.post('/api/gemini', async (req, res) => {
  const { message } = req.body;
  try {
    // Call the Gemini API
    const response = await GeminiAPI.call({ message });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error calling Gemini API' });
  }
});

// Route for GitHub deployment
app.post('/api/deploy', async (req, res) => {
  const { token, code } = req.body;
  try {
    // Authenticate with GitHub API using the token
    const githubClient = new GitHubAPI(token);
    // Deploy the code to GitHub
    await githubClient.deploy(code);
    res.json({ message: 'Deployment successful' });
  } catch (error) {
    res.status(500).json({ error: 'Error deploying to GitHub' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});