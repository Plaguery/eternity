import { showDialogue } from "./util.js";

const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");

showDialogue(
  [
    "When you come to, you find yourself staring up at the sky.",
    "...",
    "What just happened?",
    "Was any of it real?",
    "YOU ESCAPED: TRUE ENDING",
  ],
  dialog,
  dialogText,
);
