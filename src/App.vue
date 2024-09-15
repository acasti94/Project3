<script setup>
let interval; 

document.getElementById('startBtn').addEventListener('click', function () {
    let timeInput = document.getElementById('timeInput').value;
    let countdownDisplay = document.getElementById('countdownDisplay');
    
    if (timeInput > 60 || timeInput <= 0) {
        alert('Please enter a number between 1 and 60.');
        return;
    }

    countdownDisplay.innerHTML = `Time remaining: ${timeInput}`;

    let interval = setInterval(function () {
        timeInput--;
        countdownDisplay.innerHTML = `Time remaining: ${timeInput}`;

        if (timeInput <= 0) {
            clearInterval(interval);
            alert('Time up!');
        }
    }, 1000);
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(interval);  // Clear the countdown interval
    document.getElementById('timeInput').value = '';  // Clear the input field
    document.getElementById('countdownDisplay').innerHTML = 'Time left: 0';  // Reset display
});

</script>

<template>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Timer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Countdown Timer</h1>
        <label for="timeInput">Enter time (in seconds, max 60): </label>
        <input type="number" id="timeInput" max="60" min="1">
        <button id="startBtn">Start Countdown</button>
        <button id="resetBtn">Reset Timer</button>
        <div id="countdownDisplay">Time left: 0</div>
    </div>
    <script src="main.js"></script>
</body>



</template>
