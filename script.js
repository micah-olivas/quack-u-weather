// script.js
const text = "Quack-U-Weather, Copyright 2023. A project by Oli the Younger.";
let index = 0;
let lookupTable = [];  // Assuming lookupTable is an array of objects. Populate it with your data.

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
    const maxDuration = 3;  // Maximum duration (seconds)
    
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
});

function getPrediction() {
    const logoContainer = document.getElementById('logo-container');
    const appBox = document.getElementById('app');
    const outputDiv = document.getElementById('output');
    const locationDiv = document.getElementById('location');
    const loadingMessage = document.getElementById('loading-message');
    
    logoContainer.style.transform = 'translateY(-50px)';
    
    // Display the location and show the loading message
    locationDiv.innerHTML = 'Wasco, CA \n<span style="font-family: Menlo, monospace;">(35.5941° N, 119.3409° W)</span>';
    loadingMessage.style.display = 'block';
    
    // Transition to a specified max-height
    appBox.style.transition = 'max-height 0.5s ease-in-out';
    appBox.style.maxHeight = '500px';
    
    // Simulate fetching prediction
    setTimeout(() => {
        loadingMessage.style.display = 'none';
        
        // Manually set the predictionValue for testing
        const predictionValue = 5;
        
        // Show the traffic lights once the prediction is received
        document.getElementById('traffic-lights').style.visibility = 'visible';
        
        // Light up the traffic lights based on the predictionValue
        for (let i = 1; i <= predictionValue; i++) {
            document.getElementById(`light-${i}`).classList.add('active');
        }
        
        // Display the message based on the predictionValue
        const messageContainer = document.getElementById('message-container');
        let message = '';
        let color = '';  // new variable to hold the color value
        switch (predictionValue) {
            case '1': 
                message = 'Poor Prediction';
                color = 'red';  // color red for poor prediction
                break;
            case '2': case '3': 
                message = 'Fair Prediction';
                color = 'yellow';  // color yellow for fair prediction
                break;
            case '4': case '5': 
                message = 'Good Prediction';
                color = 'green';  // color green for good prediction
                break;
            default: 
                message = 'No Prediction Available';
                color = 'gray';  // color gray for no prediction available
                break;
        }
        messageContainer.textContent = message;
        messageContainer.style.color = color;  // set the color of the message text
        messageContainer.classList.add('active');
    }, 1000);
}

window.onload = function() {
    randomBobbing();  // Start random bobbing
};
