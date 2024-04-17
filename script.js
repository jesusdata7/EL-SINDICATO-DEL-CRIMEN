const eventTime = new Date("2024-04-17T19:00:00").getTime(); // Asegúrate de ajustar esta fecha y hora al evento

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventTime - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "La clave de acceso al chat es: 1234"; // Asegúrate de ajustar este mensaje y la clave como consideres apropiado
    }
}, 1000);

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const secretPassword = "La contraseña es TONTOQUIENLOLEA"; // Asegúrate de que esto coincida con el mensaje revelado

    if (passwordInput === secretPassword) {
        window.location.href = 'pista.html';
    } else {
        alert("Contraseña incorrecta.");
    }
}
