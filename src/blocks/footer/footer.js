import { toggle, down, up } from 'slide-element';

export default function footerAccordion() {
  const breakPoint = window.matchMedia('(max-width: 1440px)');
  const accordionBlocks = document.querySelectorAll('.footer__menu-item');
  if (accordionBlocks) {
    function handler() {
      this.classList.toggle('footer__menu-head--active');
      toggle(this.nextSibling.nextSibling, { display: 'grid' });
    }
    function accordionToggle() {
      for (const accordionItem of accordionBlocks) {
        const itemHead = accordionItem.querySelector('.footer__menu-head');
        const itemBody = accordionItem.querySelector('.footer__menu-body');
        if (breakPoint.matches) {
          itemHead.addEventListener('click', handler);
          up(itemBody);
        } else {
          itemHead.removeEventListener('click', handler);
          itemHead.classList.contains('footer__menu-head--active') &&
            itemHead.classList.toggle('footer__menu-head--active');
          down(itemBody, { display: 'grid' });
        }
      }
    }
    breakPoint.addEventListener('change', accordionToggle);
    accordionToggle();
  }
}
