document.addEventListener('DOMContentLoaded', function() {

    const motivationBtn = document.getElementById('motivationBtn');
    const messageDiv = document.getElementById('messageDiv');
    const motivationMessage = document.getElementById('motivationMessage');

    function showMessage() {

        const message = "🌟 Não desista, o futuro de sucesso está próximo!!";

        motivationMessage.textContent = message;
        
        messageDiv.style.display = 'block';
    }

    motivationBtn.addEventListener('click', showMessage);
});