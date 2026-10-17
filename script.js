let userBalance = parseFloat(localStorage.getItem('userBalance')) || 0.00;

// Update balance display on load if element exists
if(document.getElementById('balance')) {
    document.getElementById('balance').innerText = userBalance.toFixed(2);
}

function watchVideo(reward, buttonElement) {
    buttonElement.disabled = true;
    buttonElement.innerText = "Watching...";
    
    // Simulate a 3-second watch timer
    setTimeout(() => {
        userBalance += reward;
        localStorage.setItem('userBalance', userBalance);
        
        if(document.getElementById('balance')) {
            document.getElementById('balance').innerText = userBalance.toFixed(2);
        }
        
        buttonElement.innerText = "Completed!";
        buttonElement.style.backgroundColor = "#22c55e";
    }, 3000);
}
