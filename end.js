import { showDialogue, getCookies, refreshInv, closeUp } from "./util.js";
refreshInv();
const cookies = getCookies();
const door = document.querySelector("#door");
const dialog = document.querySelector("#dialog");
const dialogText = document.querySelector("#dialogText");
showDialogue(
  [
    "That wire seemed important, but you ignore it and move on nonetheless.",
    "You come to a door.",
  ],
  dialog,
  dialogText,
);
door.addEventListener("click", () => {
  if (cookies.key) {
    showDialogue([
      "You step up to the door, only to realize it's locked.",
      "Hm...",
      "Good thing I found that key earlier.",
      "You unlock the door, and step forward.",
      "YOU ESCAPED: GOOD ENDING",
    ]);
  } else {
    showDialogue(
      [
        "You step up to the door, only to realize it's locked.",
        "You stare in dismay.",
        "You know there has to be a key somewhere, if you look hard enough.",
        "Suddenly, your phone starts ringing.",
      ],
      dialog,
      dialogText,
    );
    closeUp(document.querySelector("#phone"), document.querySelector("#bye"));
    //show phone pop up etc etc
  }
});
