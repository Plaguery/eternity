import { refreshInv, showDialogue, closeUp } from "./util.js";
const lock = document.querySelector("#lock");
const combo = document.querySelector("#comboLock");
const submit = document.querySelector("#submitCombo");

lock.addEventListener("click", () => {
  const exitLock = document.querySelector("#exitLock");
  closeUp(comboLock, exitLock);
});

submit.addEventListener("click", () => {
  var code = "";
  var comboBox = combo.children;
  for (var i = 0; i < 3; i++) {
    code += comboBox[i].value;
  }
  if (code == "462") {
    console.log("got it");
  }
});

const book = document.querySelector("#notebook");
book.addEventListener("click", () => {
  const bookScene = document.querySelector("#bookCloseUp");
  const exitBook = document.querySelector("#exitBook");
  closeUp(bookScene, exitBook);
});
