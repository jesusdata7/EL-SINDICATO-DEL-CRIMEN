const eventTime = new Date("2024-05-03T19:30:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventTime - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const secretPassword = "contraseña123";

    if (passwordInput === secretPassword) {
        window.location.href = 'pista.html';
    } else {
        alert("Contraseña incorrecta.");
    }
}
