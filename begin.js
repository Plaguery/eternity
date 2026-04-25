var balloonNum = 4;
const balloons = document.querySelector("#balloons");
balloons.addEventListener("click", () => {
  balloons.innerHTML = balloonNum;
  balloonNum -= 1;
});

document.cookie = "username=John Doe";
console.log(document.cookie);
