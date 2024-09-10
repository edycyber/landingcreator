import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(bodyParser.json());

// Default route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'editor.html'));
});

// Route to handle Gemini AI interaction
app.post('/api/ask-ai', async (req, res) => {
    const { question } = req.body;
    try {
        const response = await fetch('https://api.gemini.openai.com/v1/chat', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,  // Ensure GEMINI_API_KEY is set
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "gemini-1.5-pro-latest",  // Make sure this model name is correct
                messages: [{ role: "user", content: question }]  // Sending the user's message
            })
        });
        
        // Check if the response was successful
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Gemini API Error: ${response.statusText} - ${errorText}`);
            return res.status(500).json({ error: 'Error fetching response from Gemini API' });
        }

        const data = await response.json();
        
        // Make sure the response contains the expected data
        if (data.choices && data.choices[0] && data.choices[0].message) {
            res.json({ response: data.choices[0].message.content });
        } else {
            console.error('Unexpected Gemini API response:', data);
            res.status(500).json({ error: 'Invalid response from Gemini API' });
        }
    } catch (error) {
        console.error('Failed to contact Gemini API:', error);
        res.status(500).json({ error: 'Failed to contact Gemini API' });
    }
});


// Route to handle GitHub deployment
app.post('/api/deploy', async (req, res) => {
    const { token, code } = req.body;
    try {
        await fetch('https://api.github.com/repos/user/repo/contents/index.html', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: "Deploying from editor",
                content: Buffer.from(code).toString('base64')
            })
        });
        res.json({ message: 'Deployed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'GitHub deployment failed' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Route to handle Sign Out / Logout
app.get('/logout', (req, res) => {
    // Clear session or tokens (if you have any session management)
    // For example, if you were using cookies:
    // res.clearCookie('token');
    // Redirect to the homepage or login page
    res.redirect('https://edycyber.github.io/landingcreator/');  // Replace with your actual URL
});
