import { getCookies, closeUp, showDialogue, refreshInv } from "./util.js";
const cookies = getCookies();
const next = document.querySelector("#nextCont");
const wire = document.querySelector("#wire");
const snip = new Audio("music/snip.wav");
refreshInv();
showDialogue(
  [
    "You find yourself falling once more",
    "You land in an empty office building.",
  ],
  dialog,
  dialogText,
);
wire.addEventListener("click", () => {
  if (cookies.scissors) {
    snip.play();
    showDialogue(
      [
        "You look at the wire...",
        "Instantly, you know what you have to do.",
        "Grabbing your scissors, you decide to snip it.",
        "Suddenly, everything disappears in a flash of white, and you lose consciousness.",
      ],
      dialog,
      dialogText,
    );
    wire.style.display = "none";
    document.querySelector("#white").style.display = "block";
    next.setAttribute("href", "escape.html");
  } else {
    showDialogue(
      [
        "You feel like you should cut this wire.",
        "For that, you'll need something sharp.",
        "Don't people usually lock up their sharp objects?",
      ],
      dialog,
      dialogText,
    );
  }
});
