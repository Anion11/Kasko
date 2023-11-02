window.addEventListener("load", function () {
  let questions__item = document.getElementsByClassName("questions__item");
  for(let item of questions__item){
    item.querySelectorAll("div.questions__header")[0].addEventListener("click", (e) =>{
      item.querySelectorAll("div.questions__header .expand__plus")[1].classList.toggle("expand__plus-active");
      item.querySelectorAll("div.questions__text")[0].classList.toggle("is-visible");
    })
  }
});
