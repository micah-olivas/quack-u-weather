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
}
