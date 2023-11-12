export default function uiExpand() {
  const questionsItem = document.querySelectorAll('.questions__item');
  for (const item of questionsItem) {
    item.querySelectorAll('div.questions__header')[0].addEventListener('click', () => {
      item.querySelectorAll('div.questions__header .expand__plus')[1].classList.toggle('expand__plus-active');
      item.querySelectorAll('div.questions__text')[0].classList.toggle('is-visible');
    });
  }
}
