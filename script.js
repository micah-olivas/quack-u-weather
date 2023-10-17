// script.js
async function getPrediction() {
    let response = await fetch('https://your-model-api-url.com/predict', {
        method: 'GET'
    });
    
    let result = await response.json();
    document.getElementById('result').innerText = 'Prediction: ' + result.prediction;
}
