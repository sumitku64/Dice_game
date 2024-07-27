var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 2 win!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
document.querySelector("button");
refreshButton.addEventListener('click', () => {
    window.location.reload();
});