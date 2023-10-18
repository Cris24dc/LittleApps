const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const submit = document.querySelector(".submit");
const title = document.querySelector(".title");

let value = 0;

star1.addEventListener("click", function () {
  setStars(1);
});

star2.addEventListener("click", function () {
  setStars(2);
});

star3.addEventListener("click", function () {
  setStars(3);
});

star4.addEventListener("click", function () {
  setStars(4);
});

star5.addEventListener("click", function () {
  setStars(5);
});

function setStars(starCount) {
  for (let i = 1; i <= 5; i++) {
    const starButton = document.querySelector(`.star${i}`);
    const starImage = starButton.firstElementChild;
    if (i <= starCount) {
      starImage.src = "img/star.png";
    } else {
      starImage.src = "img/stargray.png";
    }
  }
}

submit.addEventListener("click", function () {
  for (let i = 1; i <= 5; i++) {
    const starButton = document.querySelector(`.star${i}`);
    const starImage = starButton.firstElementChild;
    if (starImage.src.endsWith("/img/star.png")) {
      value = i;
    }
  }

  title.innerHTML = `Your rate is ${value}`;
});
