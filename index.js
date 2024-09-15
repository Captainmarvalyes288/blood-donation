
function showSplashScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="splash-screen">
            <h1>Welcome to RedFlow</h1>
            <p>Donate Blood, Save Lives</p>
            <button onclick="redirectToOnboarding()">Get Started</button>
            <p>Already have an account? <a href="signup.html">Signup</a></p>
        </div>
    `;
    setTimeout(() => {
        window.location.href = 'onboarding.html';  // Redirects to onboarding page after 2 seconds
    }, 10000);
}

function redirectToOnboarding() {
    window.location.href = 'onboarding.html';  // Redirects immediately when button is clicked
}

// Initialize the app with the splash screen
document.addEventListener('DOMContentLoaded', showSplashScreen);
