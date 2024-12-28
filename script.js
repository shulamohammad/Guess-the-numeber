let numVal;
let Score = 20; // Initial score
let Highscore = 0; // High score tracker
let randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
console.log("Generated random number:", randomNumber); // Log the random number

document.querySelector(".btn").addEventListener("click", function () {
    numVal = parseInt(document.querySelector(".number").value, 10); // Fetch and convert input value to a number
    console.log("Input value:", numVal); // Log the input value
    const content = document.querySelector(".guess");
    const scoreElement = document.querySelector(".score");

    if (!numVal) {
        content.textContent = "⛔ No input!";
        document.body.style.backgroundColor = "#212121";
        return;
    }

    if (Score === 0) {
        content.textContent = "💥 You lost!";
        document.querySelector(".btn").disabled = true; // Disable the check button
        return;
    }

    if (numVal === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
        content.textContent = "🎉 Correct!";
        document.body.style.backgroundColor = "green";
        document.querySelector(".qstn").textContent = randomNumber;

        // Update high score if the current score is greater
        if (Score > Highscore) {
            Highscore = Score;
            document.querySelector(".Highscore").textContent = Highscore; // Display the high score
        }

        document.querySelector(".btn").disabled = true; // Disable the check button after a correct guess
    } else {
        content.textContent =
            numVal > randomNumber ? "📈 Guess is too high!" : "📉 Guess is too low!";
        document.body.style.backgroundColor = "red";
        Score--;
        scoreElement.textContent = Score;

        if (Score === 0) {
            content.textContent = "💥 You lost!";
            document.querySelector(".btn").disabled = true; // Disable the check button
        }
    }
});

// "Play Again" button logic
document.querySelector(".btnA").addEventListener("click", function () {
    Score = 20; // Reset the score
    randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a new random number
    console.log("Generated new random number:", randomNumber);

    // Reset game state
    document.querySelector(".score").textContent = Score;
    document.querySelector(".guess").textContent = "Start guessing...";
    document.body.style.backgroundColor = "#212121";
    document.querySelector(".qstn").textContent = "?";
    document.querySelector(".number").value = ""; // Clear the input field
    document.querySelector(".btn").disabled = false; // Re-enable the check button

    // High score persists
    document.querySelector(".Highscore").textContent = Highscore;
});
