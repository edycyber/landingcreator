function validate() {
    const code = document.getElementById('codeInput').value.trim();
    
    const validCodes = ['AI1532', 'AI1234', 'AI9876','BP-4937','PP-59874'];

    if (validCodes.includes(code)) {
        window.location.href = 'choose.html';
    } else {
        window.location.href = 'https://foodiverse0.gumroad.com/l/premiumplan';
    }
}
