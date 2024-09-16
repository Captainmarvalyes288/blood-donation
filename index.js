
function showSplashScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="splash-screen">
            <img src="https://via.placeholder.com/150x150.png?text=Logo" alt="App Logo">
            <h1>Welcome to RedFlow</h1>
            <p>Donate Blood, Save Lives</p>
            <button onclick="redirectToOnboarding()">Get Started</button>
            <p>Already have an account? <a href="signup.html">Signup</a></p>
        </div>
    `;
}

// Initialize the app with the splash screen
document.addEventListener('DOMContentLoaded', showSplashScreen);

function showLogin() {
    app.innerHTML = `
        <div class="container login-container">
            <h2>Login</h2>
            <form onsubmit="event.preventDefault(); handleLogin()">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="#" onclick="showSignup()">Sign up</a></p>
        </div>
    `;
}
function showSignup() {
    app.innerHTML = `
        <div class="container signup-container">
            <h2>Sign Up</h2>
            <form onsubmit="event.preventDefault(); handleSignup()">
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <input type="password" placeholder="Confirm Password" required>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="#" onclick="showLogin()">Login</a></p>
        </div>
    `;
}
function handleLogin() {
    // Implement login logic here
    alert('Login successful!');
    showHome();
}

function handleSignup() {
    // Implement signup logic here
    alert('Sign up successful!');
    showHome();
}

function showHome() {
    app.innerHTML = `
        <div class="container home-container">
            <h2>Welcome to Blood Donation App</h2>
            <div class="quick-actions">
                <button onclick="showDonate()">Donate Blood</button>
                <button onclick="showPostRequest()">Request Blood</button>
                <button onclick="showBloodBanks()">Find Blood Banks</button>
            </div>
            <div class="recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li>John Doe donated blood at City Hospital</li>
                    <li>Emergency request for B+ blood in Downtown</li>
                    <li>New blood drive scheduled for next week</li>
                </ul>
            </div>
            ${createNavBar('home')}
        </div>
    `;
}

// Initialize the app
showSplashScreen();