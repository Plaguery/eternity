import { showDialogue } from "./util.js";

const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");

const bgm = new Audio("music/ambiance.mp3");
bgm.loop = true;
bgm.volume = 0.4;
bgm.play();

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
