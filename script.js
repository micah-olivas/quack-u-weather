// script.js
const text = "Quack-U-Weather Copyright 2023. A project by Oli the Younger.";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById('credits').textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);  // Adjust speed of typing
    }
}

function randomBobbing() {
    const logoContainer = document.getElementById('logo-container');
    const maxX = 6;  // Maximum horizontal displacement (pixels)
    const maxY = 6;  // Maximum vertical displacement (pixels)
    const maxDuration = 4;  // Maximum duration (seconds)
    
    // Generate random displacement and duration
    const x = Math.random() * maxX * (Math.random() < 0.4 ? 1 : -1);
    const y = Math.random() * maxY * (Math.random() < 0.4 ? 1 : -1);
    const duration = Math.random() * maxDuration;
    
    // Apply the new transformation and transition duration
    logoContainer.style.transform = `translate(${x}px, ${y}px)`;
    logoContainer.style.transitionDuration = `${duration}s`;
    
    // Set up the next bobbing event
    setTimeout(randomBobbing, duration * 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    let today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    type();  // Start typing animation
    document.getElementById('title').innerText = `Click to predict daily outcomes for ${today}`;
});

async function getPrediction() {
    let response = await fetch('https://your-model-api-url.com/predict', {
        method: 'GET'
    });
    
    let result = await response.json();
    document.getElementById('result').innerText = 'Prediction: ' + result.prediction;

    // Show the output div and populate it with the prediction results
    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block'; // Show the div
    outputDiv.textContent = 'Your prediction results go here'; // Replace this with your prediction results
}

window.onload = function() {
    /* ... (previous script) ... */
    randomBobbing();  // Start random bobbing
};
