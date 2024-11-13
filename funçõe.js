function showWelcomeMessage() {
    var message = "Olá! Bem-vindo ao Finanças Inteligentes.";
    document.getElementById("welcomeMessage").innerText = message;
}
function showCurrentDate() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    document.getElementById('currentDate').innerText = "Data Atual: " + date;
}
window.onload = function() {
    showCurrentDate();
};
function calculateSavings() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var savings = income - expenses;
    document.getElementById('savingsResult').innerText = "Sua poupança mensal é: R$ " + savings.toFixed(2);
}
function toggleArticleVisibility(articleId) {
    var element = document.getElementById(articleId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
function startCountdown() {
    var countdownDate = new Date("Dec 31, 2024 00:00:00").getTime();
    var countdownElement = document.getElementById('countdown');

    var interval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = "Próxima publicação em: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerText = "Nova publicação disponível!";
        }
    }, 1000);
}
window.onload = function() {
    startCountdown();
};
function convertCurrency() {
    var brl = parseFloat(document.getElementById('brl').value);
    var exchangeRate = 0.19;
    var usd = brl * exchangeRate;
    document.getElementById('currencyResult').innerText = "Valor em USD: $" + usd.toFixed(2);
}
