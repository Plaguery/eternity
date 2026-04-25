export function refreshInv() {
  const inv = [
    { name: "key", src: "assets/key.png" },
    { name: "scissors", src: "assets/level__apple.png" },
  ];

  const inventory = document.querySelector("#inventory");
  console.log(inventory);

  const cookies = document.cookie.split("; ").reduce((prev, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = decodeURIComponent(value.join("="));
    return prev;
  }, {});

  for (const i of inv) {
    if (cookies[i.name]) {
      const item = document.createElement("div");
      item.classList.add("invItem");
      inventory.appendChild(item);
      const icon = document.createElement("img");
      icon.setAttribute("src", i.src);
      item.appendChild(icon);
    }
  }
}
