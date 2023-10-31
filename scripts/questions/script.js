window.addEventListener("load", function () {
  let cardBtnExpand = document.getElementsByClassName("questions__expand");
  let cardHeader = document.getElementsByClassName("questions__header");
  let cardText = document.getElementsByClassName("questions__text");
  for (let i = 0; i < cardHeader.length; i++) {
    cardBtnExpand[i].childNodes[1].classList.toggle("expand-active");
    cardHeader[i].addEventListener("click", function () {
      cardText[i].classList.toggle("is-visible");
      cardBtnExpand[i].childNodes[1].classList.toggle("expand-active");
      cardBtnExpand[i].childNodes[3].classList.toggle("expand-active");
    });
  }
});
