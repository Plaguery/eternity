var balloonNum = 4;
const balloons = document.querySelector("#balloons");
balloons.addEventListener("click", () => {
  balloons.innerHTML = balloonNum;
  balloonNum -= 1;
});

document.cookie = "username=John Doe";
console.log(document.cookie);

const basket = document.querySelector("#basket");
basket.addEventListener("click", () => {
  console.log("hi");
  const basketScene = document.querySelector("#basketCloseUp");
  basketScene.style.display = "block";

  const exitBasket = document.querySelector("#exitBasket");
  exitBasket.addEventListener("click", () => {
    basketScene.style.display = "none";
  });
});

//add key inside apple -> unlock door at end
