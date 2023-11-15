import IMask from 'imask';
import JustValidate from 'just-validate';

export default function uiInput() {
  inputMask();
  checkInputFill();
  validation();
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
          mask: '~[~~~~~]-##-000000',
          lazy: false,
          prepareChar: string__ => string__.toUpperCase(),
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
  if (uiInputs) {
    for (const element of uiInputs) {
      const input = element.querySelector('input');
      input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
      input.addEventListener('input', function () {
        input.value === '' ? input.classList.remove('filled') : input.classList.add('filled');
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
        const array = ['I', 'V', 'X'];
        for (const policeInput of policeInputs) {
          validate.addField(policeInput, [
            {
              validator: (value, context) => !value.match('_'),
              errorMessage: 'Обязательное поле'
            },
            {
              validator: (value, context) => {
                for (const char of value) {
                  if (array.includes(char)) {
                    console.log(char);
                  }
                }
              },
              errorMessage: 'Римские цифры написаны неправильно!!!'
            }
          ]);
        }
      }
    }
  }
}
