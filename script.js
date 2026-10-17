let userBalance = 0.00;

function watchVideo(reward, buttonElement) {
    buttonElement.disabled = true;
    buttonElement.innerText = "Watching...";
    
    // Simulate a 3-second watch timer
    setTimeout(() => {
        userBalance += reward;
        document.getElementById('balance').innerText = userBalance.toFixed(2);
        buttonElement.innerText = "Completed!";
        buttonElement.style.backgroundColor = "#22c55e";
    }, 3000);
}
