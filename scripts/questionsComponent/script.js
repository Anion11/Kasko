window.addEventListener("load", function () {
  let cardBtnExpand = document.getElementsByClassName("item__header__expand");
  let cardHeader = document.getElementsByClassName("item__header");
  let cardText = document.getElementsByClassName("item__text");
  for (let i = 0; i < cardHeader.length; i++) {
    cardHeader[i].addEventListener("click", function () {
      cardText[i].classList.toggle("is-visible");
      if (cardBtnExpand[i].style.display == "none")
        cardBtnExpand[i].style.display = "block";
      else cardBtnExpand[i].style.display = "none";
    });
  }
});
