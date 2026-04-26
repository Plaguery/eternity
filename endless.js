import { showDialogue } from "./util.js";
const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
showDialogue(
  [
    "Ring ring.",
    "It's your boss.",
    "You don't pick up.",
    "You can't pick up.",
    "You just stand there, staring at the phone.",
    "YOU WERE TRAPPED: BAD ENDING",
  ],
  dialog,
  dialogText,
);
const phone = document.querySelector("#phone");
const ring = new Audio("music/ring.mp3");
ring.volume = 0.2;
ring.loop = true;
ring.play();
phone.addEventListener("click", () => {
  showDialogue(["You can't bring yourself to do it."], dialog, dialogText);
});
