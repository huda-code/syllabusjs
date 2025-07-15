let balloon = document.getElementById("balloon");
let scoreText = document.getElementById("score");
let score = 0;

let missedText = document.getElementById("missed");
let missed = 0;

// ✅ Balloon Click Handler
balloon.addEventListener("click", () => {
  if (score >= 10) return;

  score += 1;
  scoreText.textContent = "Score: " + score;

  // Game Over at 10 points
  if (score === 10) {
    alert("🎉 Game Over! You scored 10!");
    balloon.style.display = "none";
  }

  // Random color and position
  let colors = ["red", "blue", "green", "purple", "orange"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  let x = Math.random() * 80;
  let y = Math.random() * 60;
  balloon.style.marginLeft = x + "vw";
  balloon.style.marginTop = y + "vh";
});

// ✅ Missed Click Handler (outside the balloon)
document.body.addEventListener("click", (e) => {
  if (e.target.id !== "balloon") {
    missed += 1;
    missedText.textContent = "Missed Clicks: " + missed;

    // Optional: reduce score as penalty
    if (score > 0 && score < 10) {
      score -= 1;
      scoreText.textContent = "Score: " + score;
    }
  }
});
