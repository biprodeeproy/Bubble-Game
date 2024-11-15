let score = 0;
let rn = 0;
const makeBubble = () => {
  let boxNum = "";
  for (let i = 0; i < 76; i++) {
    let random = Math.floor(Math.random() * 10);
    boxNum += `<div class="bubble">${random}</div>`;
  }
  document.querySelector(".bottom-panel").innerHTML = boxNum;
};
makeBubble();
const timeFunc = () => {
    let timer = 60;
    let timeInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector(".bottom-panel").innerHTML = `<h1>Your score is ${score}</h1>`;
        }
    }, 1000);
}
timeFunc();
const hitTimer = () => {
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = rn;
}
hitTimer();


const increaseScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}
document.querySelector(".bottom-panel").addEventListener("click", (dets) => {
    let currentHit = Number(dets.target.textContent);
    if (currentHit == rn) {
        increaseScore();
        makeBubble();
        hitTimer();
    }
})