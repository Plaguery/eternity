import { showDialogue } from "./util.js";

const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");

showDialogue(
  [
    "Suddenly, everything flashes.",
    "Your vision goes black.",
    "When you come to, you find yourself staring up at the ceiling.",
    "...",
    "What just happened?",
  ],
  dialog,
  dialogText,
);
