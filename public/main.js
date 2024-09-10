// Initialize Ace editor
const editor = ace.edit("code-editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

// File tree simulation
const fileList = document.getElementById('file-list');
const files = ['index.html', 'styles.css', 'script.js'];
files.forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.textContent = file;
    fileItem.draggable = true;
    fileList.appendChild(fileItem);
});

// Drag and drop functionality
document.getElementById('code-editor').addEventListener('dragover', (e) => {
    e.preventDefault();
});

document.getElementById('code-editor').addEventListener('drop', (e) => {
    e.preventDefault();
    const fileName = e.dataTransfer.getData('text');
    editor.setValue(`// Content of ${fileName}\n// Start coding here`);
});

// AI Chat integration with Gemini API
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', async () => {
    const message = chatInput.value;
    if (message.trim()) {
        appendMessage('User', message);
        chatInput.value = '';
        
        try {
            // Send the message to the server to get a response from Gemini API
            const response = await fetch('/api/ask-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: message })
            });
            
            const data = await response.json();
            
            // Check if there's an error in the response
            if (data.error) {
                appendMessage('AI', 'Error: ' + data.error);
            } else {
                appendMessage('AI', data.response);  // Append the AI's response
            }
        } catch (error) {
            appendMessage('AI', 'Error: Failed to reach the AI service.');
            console.error('Error:', error);
        }
    }
});

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Deploy to GitHub
const deployBtn = document.getElementById('deploy-btn');
const deployModal = document.getElementById('deploy-modal');
const closeModal = document.getElementsByClassName('close')[0];
const confirmDeploy = document.getElementById('confirm-deploy');

deployBtn.onclick = () => {
    deployModal.style.display = 'block';
}

closeModal.onclick = () => {
    deployModal.style.display = 'none';
}

confirmDeploy.onclick = async () => {
    const token = document.getElementById('github-token').value;
    if (token) {
        const codeContent = editor.getValue();
        // Deploy via backend (send GitHub token and code)
        await fetch('/api/deploy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, code: codeContent })
        });
        alert('Deployed to GitHub');
        deployModal.style.display = 'none';
    } else {
        alert('Please enter a valid GitHub token.');
    }
};

// Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        editor.setTheme("ace/theme/monokai");
    } else {
        editor.setTheme("ace/theme/textmate");
    }
});

// Sign Out Button
const signOutBtn = document.getElementById('sign-out-btn');
signOutBtn.addEventListener('click', () => {
    window.location.href = '/logout';  // Redirect to the logout route
});

