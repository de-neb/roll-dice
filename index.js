const titleCard = document.querySelector("h1");
const buttonRoll = document.querySelector(".btn input");
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

buttonRoll.addEventListener("click", function () {
  let p1 = Math.floor(Math.random() * 6) + 1;
  let p2 = Math.floor(Math.random() * 6) + 1;

  let p1num = "images/dice" + p1 + ".svg";
  let p2num = "images/dice" + p2 + ".svg";

  /* changes the image based on the random number generated */
  dice1.classList.add("spin");
  dice2.classList.add("spin");

  setTimeout(function () {
    dice1.setAttribute("src", p1num);
    dice2.setAttribute("src", p2num);
    dice1.classList.remove("spin");
    dice2.classList.remove("spin");
    titleCard.classList.add("appear");

    if (p1 > p2) {
      titleCard.innerText = "Player 1 wins!";
    } else if (p1 < p2) {
      titleCard.innerText = "Player 2 wins!";
    } else {
      titleCard.innerText = "Draw!";
    }

    setTimeout(() => {
      titleCard.classList.remove("appear");
    }, 500);
  }, 2000);
});
