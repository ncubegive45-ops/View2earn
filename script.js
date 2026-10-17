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

function handleLogin(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('loginEmail').value.trim();
    const passwordInput = document.getElementById('loginPassword').value;

    // Strict email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address (e.g., user@example.com).");
        return;
    }

    // 8-character minimum check
    if (passwordInput.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Save session and redirect back to dashboard
    localStorage.setItem('userEmail', emailInput);
    alert("Login successful!");
    window.location.href = "index.html";
}
