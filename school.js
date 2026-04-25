const combo = document.querySelector("#comboLock");
const submit = document.querySelector("#submitCombo");
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
  bookScene.style.display = "block";

  const exitBook = document.querySelector("#exitBook");
  exitBook.addEventListener("click", () => {
    bookScene.style.display = "none";
  });
});
