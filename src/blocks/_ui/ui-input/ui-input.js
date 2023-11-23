import IMask from 'imask';
import JustValidate from 'just-validate';

export default function uiInput() {
  inputMask();
  checkInputFill();
  validation();
  clearInputValue();
  searchOnFocus();
}

function searchOnFocus() {
  const uiInputSearch = document.querySelectorAll('.ui-input-search');
  if (uiInputSearch) {
    for (const searchItem of uiInputSearch) {
      const searchInput = searchItem.querySelector('input');
      const searchImage = searchItem.querySelector('img');
      searchInput.addEventListener('focus', () => {
        searchImage.src = '../../images/ui-input/search-focus.png';
      });
      searchInput.addEventListener('blur', () => {
        if (!searchInput.value) searchImage.src = '../../images/ui-input/search.png';
      });
    }
  }
}
function inputMask() {
  const inputMaskItems = document.querySelectorAll('input');
  if (inputMaskItems) {
    for (const inputMaskItem of inputMaskItems) {
      if (inputMaskItem.attributes[1].value === 'phone') {
        IMask(inputMaskItem, {
          mask: '+{7} (000) 000-00-00',
          lazy: false
        });
      }
      if (inputMaskItem.attributes[1].value === 'police') {
        IMask(inputMaskItem, {
          mask: '~[~~~~~~~]-##-000000',
          lazy: false,
          prepareChar: (string__) => string__.toUpperCase(),
          definitions: {
            '#': /[А-Я]/,
            '~': /[IVX]/
          }
        });
      }
    }
  }
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input');
  const uiInputSearch = document.querySelectorAll('.ui-input-search');
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input');
      input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
      input.addEventListener('input', function () {
        input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
      });
    }
  }
  if (uiInputSearch) {
    for (const element of uiInputSearch) {
      const input = element.querySelector('input');
      input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
      input.addEventListener('input', function () {
        input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
      });
    }
  }
}

function clearInputValue() {
  const uiInputSearch = document.querySelectorAll('.ui-input-search');
  if (uiInputSearch) {
    for (const element of uiInputSearch) {
      const input = element.querySelector('input');
      const closeElement = element.querySelector('.ui-input-search__close');
      closeElement.addEventListener('click', () => {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      });
    }
  }
}

function validation() {
  const formBlocks = document.querySelectorAll('form');
  if (formBlocks) {
    for (const formBlock of formBlocks) {
      const inputs = formBlock.querySelectorAll('input[required], select[required], .ui-checkbox[required] input');
      const mailInputs = formBlock.querySelectorAll('input[type="email"]');
      const phoneInputs = formBlock.querySelectorAll('input[type="phone"]');
      const policeInputs = formBlock.querySelectorAll('input[type="police"]');
      const validate = new JustValidate(formBlock, {
        errorFieldCssClass: 'just-validate-error-input',
        validateBeforeSubmitting: true
      });
      if (inputs) {
        for (const input of inputs) {
          validate.addField(input, [
            {
              rule: 'required',
              errorMessage: 'Обязательное поле'
            }
          ]);
        }
      }
      if (mailInputs) {
        for (const mailInput of mailInputs) {
          validate.addField(mailInput, [
            {
              rule: 'required',
              errorMessage: 'Обязательное поле'
            },
            {
              rule: 'email',
              errorMessage: 'Введите адрес электронной почты'
            }
          ]);
        }
      }
      if (phoneInputs) {
        for (const phoneInput of phoneInputs) {
          validate.addField(phoneInput, [
            {
              validator: (value, context) => !value.match('_'),
              errorMessage: 'Обязательное поле'
            }
          ]);
        }
      }
      if (policeInputs) {
        const romanArray = 'XVI';
        const dka = [
          [-1, 1, 5, 4],
          (0)[(-1, 2, 5, 4)],
          (1)[(-1, 3, 5, 4)],
          (2)[(-1, undefined, 5, 4)],
          (3)[(-1, 8, 8, 7)],
          (4)[(-1, undefined, undefined, 6)],
          [-1, undefined, undefined, 7],
          [-1, undefined, undefined, 8],
          [-1, undefined, undefined, undefined]
        ];
        const validRoman = (string__) => {
          const lexems = [...string__].map((id) => romanArray.indexOf(id) + 1);
          let state = 0;
          let index = 0;
          while (true) {
            const lex = lexems[index] ?? 0;
            state = dka[state][lex];
            if (state === undefined) {
              return false;
            }
            if (state === -1) {
              return index === string__.length;
            }
            index += 1;
          }
        };
        for (const policeInput of policeInputs) {
          validate.addField(policeInput, [
            {
              validator: (value, context) => !value.match('_'),
              errorMessage: 'Обязательное поле'
            },
            {
              validator: (value, context) => validRoman(value.split('-')[0]),
              errorMessage: 'Римские цифры написаны неправильно!!!'
            }
          ]);
        }
      }
    }
  }
}
