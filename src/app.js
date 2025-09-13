import './style.css';

// This file initializes the web application and handles user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <h1 class="text-4xl font-bold text-blue-600 mb-6">Welcome to the Web Application</h1>
        <button class="px-6 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded shadow">
            Tailwind Test Button
        </button>
    `;
    // Additional functionality can be added here
});