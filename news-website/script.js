document.addEventListener("DOMContentLoaded", function () {
    let countdown = 10;
    const countdownElement = document.getElementById("countdown");
    const nextMessage = document.getElementById("next-message");
    const nextLink = document.getElementById("next-link");

    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = "Wait " + countdown + " seconds...";

        if (countdown <= 0) {
            clearInterval(interval);
            countdownElement.style.display = "none";
            nextMessage.style.display = "block";
            nextLink.style.display = "block";
        }
    }, 1000);
});
