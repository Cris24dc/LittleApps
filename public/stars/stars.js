const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const submit = document.querySelector(".submit");
const title = document.querySelector(".title");

let value = 0;

star1.addEventListener("click", function () {
  star1.firstElementChild.src = "img/star.png";
  star2.firstElementChild.src = "img/stargray.png";
  star3.firstElementChild.src = "img/stargray.png";
  star4.firstElementChild.src = "img/stargray.png";
  star5.firstElementChild.src = "img/stargray.png";
});

star2.addEventListener("click", function () {
  star1.firstElementChild.src = "img/star.png";
  star2.firstElementChild.src = "img/star.png";
  star3.firstElementChild.src = "img/stargray.png";
  star4.firstElementChild.src = "img/stargray.png";
  star5.firstElementChild.src = "img/stargray.png";
});

star3.addEventListener("click", function () {
  star1.firstElementChild.src = "img/star.png";
  star2.firstElementChild.src = "img/star.png";
  star3.firstElementChild.src = "img/star.png";
  star4.firstElementChild.src = "img/stargray.png";
  star5.firstElementChild.src = "img/stargray.png";
});

star4.addEventListener("click", function () {
  star1.firstElementChild.src = "img/star.png";
  star2.firstElementChild.src = "img/star.png";
  star3.firstElementChild.src = "img/star.png";
  star4.firstElementChild.src = "img/star.png";
  star5.firstElementChild.src = "img/stargray.png";
});

star5.addEventListener("click", function () {
  star1.firstElementChild.src = "img/star.png";
  star2.firstElementChild.src = "img/star.png";
  star3.firstElementChild.src = "img/star.png";
  star4.firstElementChild.src = "img/star.png";
  star5.firstElementChild.src = "img/star.png";
});

submit.addEventListener("click", function () {
  console.log(star1.firstElementChild.src);
  if (
    star1.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star2.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star3.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star4.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star5.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png"
  ) {
    value = 1;
  } else if (
    star1.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star2.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star3.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star4.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star5.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png"
  ) {
    value = 2;
  } else if (
    star1.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star2.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star3.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star4.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png" &&
    star5.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png"
  ) {
    value = 3;
  } else if (
    star1.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star2.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star3.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star4.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star5.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/stargray.png"
  ) {
    value = 4;
  } else if (
    star1.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star2.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star3.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star4.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png" &&
    star5.firstElementChild.src ==
      "file:///C:/Users/crist/Desktop/Stars/img/star.png"
  ) {
    value = 5;
  } else if (
    star1.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star2.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star3.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star4.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star5.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png"
  ) {
    value = 1;
  } else if (
    star1.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star2.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star3.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star4.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star5.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png"
  ) {
    value = 2;
  } else if (
    star1.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star2.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star3.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star4.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png" &&
    star5.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png"
  ) {
    value = 3;
  } else if (
    star1.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star2.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star3.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star4.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star5.firstElementChild.src == "http://127.0.0.1:5500/img/stargray.png"
  ) {
    value = 4;
  } else if (
    star1.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star2.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star3.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star4.firstElementChild.src == "http://127.0.0.1:5500/img/star.png" &&
    star5.firstElementChild.src == "http://127.0.0.1:5500/img/star.png"
  ) {
    value = 5;
  } else {
    value = 0;
  }

  console.log(value);
  title.innerHTML = `Your rate is ${value}`;
  value = 0;

  star1.firstElementChild.src = "img/stargray.png";
  star2.firstElementChild.src = "img/stargray.png";
  star3.firstElementChild.src = "img/stargray.png";
  star4.firstElementChild.src = "img/stargray.png";
  star5.firstElementChild.src = "img/stargray.png";
});
