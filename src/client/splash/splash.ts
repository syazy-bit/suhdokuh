import { navigateTo, requestExpandedMode } from "@devvit/web/client";

const startButton = document.getElementById(
  "start-button",
) as HTMLButtonElement;
const descriptionElement = document.getElementById(
  "description",
) as HTMLParagraphElement;
const titleElement = document.getElementById("title") as HTMLHeadingElement;

startButton.addEventListener("click", (e) => {
  requestExpandedMode(e, "game");
});

const rulesLink = document.getElementById("rules-link") as HTMLDivElement;
const tipsLink = document.getElementById("tips-link") as HTMLDivElement;
const devvitLink = document.getElementById("devvit-link") as HTMLDivElement;

rulesLink.addEventListener("click", () => {
  alert(
    "4×4 Sudoku Rules:\n\n✓ Each row: 1, 2, 3, 4 (no duplicates)\n✓ Each column: 1, 2, 3, 4 (no duplicates)\n✓ Each 2×2 box: 1, 2, 3, 4 (no duplicates)\n\nGood luck! 🧩",
  );
});

tipsLink.addEventListener("click", () => {
  alert(
    "Mini Sudoku Tips:\n\n💡 Look for rows/columns missing just one number\n💡 Check which numbers are missing in each 2×2 box\n💡 Eliminate possibilities systematically\n💡 If stuck, focus on the hardest areas first\n\nHappy solving! 🎮",
  );
});

devvitLink.addEventListener("click", () => {
  navigateTo("https://www.reddit.com/r/Devvit");
});

function init() {
  titleElement.textContent = `Ready to solve? 🧩`;
  descriptionElement.innerHTML = `Welcome to <strong>Mini Sudoku</strong>!<br/>A quick, satisfying puzzle game. Can you solve it?`;
}

init();
