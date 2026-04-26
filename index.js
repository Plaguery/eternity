import { clearCookies } from "./util.js";

clearCookies();
const bgm = new Audio("music/eternity.mp3");
bgm.loop = true;
bgm.volume = 0.4;
bgm.play();
