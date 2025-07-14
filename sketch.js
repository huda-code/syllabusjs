let balloon = document.getElementById("balloon");
let scoreText = document.getElementById("score");
let score = 0;

balloon.addEventListener("click", () => {
  score += 1;
  scoreText.textContent = "Score: " + score;

  // Change color randomly
  let colors = ["red", "blue", "green", "purple", "orange"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Move to random position
  let x = Math.random() * 80;
  let y = Math.random() * 60;
  balloon.style.marginLeft = x + "vw";
  balloon.style.marginTop = y + "vh";
});
