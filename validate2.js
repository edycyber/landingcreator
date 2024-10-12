// valide.js

// XOR Encryption/Decryption function
function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

// Obfuscated codes (encrypted with XOR)
const encryptedCodes = [
    xorEncryptDecrypt("AI1532", "secretKey"),
    xorEncryptDecrypt("AI1234", "secretKey"),
    xorEncryptDecrypt("AI9874", "secretKey"),
    xorEncryptDecrypt("PP-59874", "secretKey")
];

// Show the popup when the Premium button is clicked
document.getElementById("premium-btn").addEventListener("click", function() {
    document.getElementById("access-popup").style.display = "block";
});

// Validate access code when the Submit button is clicked
document.getElementById("validate-btn").addEventListener("click", function() {
    const enteredCode = document.getElementById("access-code").value;
    const key = "secretKey"; // same key used for encryption

    // Check if the entered code matches any of the valid codes
    const isValidCode = encryptedCodes.some(code => xorEncryptDecrypt(code, key) === enteredCode);

    if (isValidCode) {
        // Redirect to create.html if valid
        window.location.href = "create.html";
    } else {
        // Show error message and purchase button
        document.getElementById("error-message").style.display = "block";
        document.getElementById("purchase-btn").style.display = "flex"; // Show it as a flexbox for centering
    }
});

// Redirect to purchase page when the Get Premium button is clicked
document.getElementById("purchase-btn").addEventListener("click", function() {
    window.location.href = "https://sparrow-ai.online/premiumplan";
});
