/* global document */
const mainSection = document.createElement('section');
mainSection.className = 'mainSection';
const mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'RSS Виртуальная клавиатура';
const mainTextarea = document.createElement('textarea');
mainTextarea.rows = 5;
mainTextarea.cols = 50;
const paragraph1 = document.createElement('p');
paragraph1.innerHTML = 'Клавиатура создана в операционной системе Windows';
const paragraph2 = document.createElement('p');
paragraph2.innerHTML = 'Для переключения языка комбинация: левыe ctrl + Shift';
document.body.append(mainSection);
mainSection.append(mainTitle);
mainSection.append(mainTextarea);
mainSection.append(paragraph1);
mainSection.append(paragraph2);

class Keyboard {
  constructor() {
    this.keyboardContainer = null;
    this.keys = [];

    this.caps = 0;
    this.lang = false;

    this.keysLayout = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysUp = [
      'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysEng = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysEngUp = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysCode = [
      'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
      'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
      'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
      'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
      'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
    ];
  }

  init() {
    this.keyboardContainer = document.createElement('div');

    this.keyboardContainer.classList.add('keyboard');

    mainSection.append(this.keyboardContainer);
  }

  createKeys() {
    this.keysLayout.forEach((key) => {
      if (key === 'Backspace') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key backspace'>${key}</div><br>`);
      } else if (key === 'Tab') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key tab'>${key}</div>`);
      } else if (key === 'Del') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key del'>${key}</div>`);
      } else if (key === 'CapsLock') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key backspace'>${key}</div>`);
      } else if (key === 'Enter') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key enter'>${key}</div>`);
      } else if (key === 'Shift') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key backspace'>${key}</div>`);
      } else if (key === 'shift') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key enter'>${key}</div>`);
      } else if (key === 'Space') {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key space'>${key}</div>`);
      } else {
        this.keyboardContainer.insertAdjacentHTML('beforeend', `<div class='keyboard__key'>${key}</div>`);
      }
    });
    this.keys = document.querySelectorAll('.keyboard__key');
    this.keys.forEach((keysEl, ind) => keysEl.setAttribute('data-key', `${this.keysCode[ind]}`));
    this.keys.forEach((el) => el.addEventListener('click', (event) => {
      this.keys.forEach((key) => key.classList.remove('active'));
      this.keys.forEach((key) => key.classList.remove('anime'));
      event.target.classList.add('active');
      if (event.target.innerHTML === 'Space') {
        mainTextarea.innerHTML += ' ';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'CapsLock') {
        mainTextarea.innerHTML += '';
      } else if (event.target.innerHTML === 'Shift') {
        mainTextarea.innerHTML += '';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Tab') {
        mainTextarea.innerHTML += '  ';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Ctrl') {
        mainTextarea.innerHTML += '';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Alt') {
        mainTextarea.innerHTML += '';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Win') {
        mainTextarea.innerHTML += '';
      } else if (event.target.innerHTML === 'shift') {
        mainTextarea.innerHTML += '';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'ctrl') {
        mainTextarea.innerHTML += '';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Enter') {
        mainTextarea.innerHTML += '\n';
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Backspace') {
        mainTextarea.innerHTML = mainTextarea.innerHTML.slice(0, -1);
        el.classList.add('active');
        el.classList.add('anime');
      } else if (event.target.innerHTML === 'Del') {
        mainTextarea.innerHTML = mainTextarea.innerHTML.slice(0, -1);
        el.classList.add('active');
        el.classList.add('anime');
      } else {
        mainTextarea.innerHTML += event.target.innerHTML;
        el.classList.add('active');
        el.classList.add('anime');
      }
      if (event.target.innerHTML === 'CapsLock') {
        if (this.caps === 0) {
          this.keys.forEach((val) => {
            if (
              val.innerHTML !== 'Tab' && val.innerHTML !== 'CapsLock' && val.innerHTML !== 'Shift' && val.innerHTML !== 'Ctrl'
              && val.innerHTML !== 'Space' && val.innerHTML !== 'Win' && val.innerHTML !== 'Alt' && val.innerHTML !== 'Enter'
              && val.innerHTML !== 'Backspace' && val.innerHTML !== 'Del' && val.innerHTML !== 'shift' && val.innerHTML !== 'ctrl'
            ) {
              /* eslint-disable no-param-reassign */
              val.innerHTML = val.innerHTML.toUpperCase();
              /* eslint-enable no-param-reassign */
              event.target.classList.add('active');
              this.caps = undefined;
            }
          });
        } else {
          this.keys.forEach((val) => {
            if (
              val.innerHTML !== 'Tab' && val.innerHTML !== 'CapsLock' && val.innerHTML !== 'Shift' && val.innerHTML !== 'Ctrl'
              && val.innerHTML !== 'Space' && val.innerHTML !== 'Win' && val.innerHTML !== 'Alt' && val.innerHTML !== 'Enter'
              && val.innerHTML !== 'Backspace' && val.innerHTML !== 'Del' && val.innerHTML !== 'shift' && val.innerHTML !== 'ctrl'
            ) {
              /* eslint-disable no-param-reassign */
              val.innerHTML = val.innerHTML.toLowerCase();
              /* eslint-enable no-param-reassign */
              event.target.classList.add('active');
              this.caps = 0;
            }
          });
        }
      }
    }));
  }

  keyDownEvent(event) {
    event.preventDefault();
    this.keysEngUp = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysEng = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysLayout = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keysUp = [
      'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'ctrl',
    ];
    this.keys = document.querySelectorAll('.keyboard__key');
    this.keys.forEach((el) => el.classList.remove('active'));
    this.keys.forEach((el) => el.classList.remove('anime'));
    this.keys.forEach((a, i) => {
      const element = a.dataset.key;
      if (element === event.code) {
        if (event.code === 'Space') {
          mainTextarea.innerHTML += ' ';
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'CapsLock') {
          if (this.caps === undefined) {
            this.keys.forEach((val) => {
              if (
                val.innerHTML !== 'Tab' && val.innerHTML !== 'CapsLock' && val.innerHTML !== 'Shift' && val.innerHTML !== 'Ctrl'
                && val.innerHTML !== 'Space' && val.innerHTML !== 'Win' && val.innerHTML !== 'Alt' && val.innerHTML !== 'Enter'
                && val.innerHTML !== 'Backspace' && val.innerHTML !== 'Del' && val.innerHTML !== 'shift' && val.innerHTML !== 'ctrl'
              ) {
                a.classList.add('active');
                a.classList.add('anime');
                /* eslint-disable no-param-reassign */
                val.innerHTML = val.innerHTML.toUpperCase();
                /* eslint-enable no-param-reassign */
                this.caps = 0;
              }
            });
          } else {
            this.keys.forEach((val) => {
              if (
                val.innerHTML !== 'Tab' && val.innerHTML !== 'CapsLock' && val.innerHTML !== 'Shift' && val.innerHTML !== 'Ctrl'
                && val.innerHTML !== 'Space' && val.innerHTML !== 'Win' && val.innerHTML !== 'Alt' && val.innerHTML !== 'Enter'
                && val.innerHTML !== 'Backspace' && val.innerHTML !== 'Del' && val.innerHTML !== 'shift' && val.innerHTML !== 'ctrl'
              ) {
                /* eslint-disable no-param-reassign */
                val.innerHTML = val.innerHTML.toLowerCase();
                /* eslint-enable no-param-reassign */
                a.classList.add('active');
                a.classList.add('anime');
                this.caps = undefined;
              }
            });
          }
        } else if (event.code === 'Backspace') {
          mainTextarea.innerHTML = mainTextarea.innerHTML.slice(0, -1);
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'Delete') {
          mainTextarea.innerHTML = mainTextarea.innerHTML.slice(0, -1);
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'MetaLeft') {
          mainTextarea.innerHTML += '';
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'Tab') {
          mainTextarea.innerHTML += '  ';
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'Enter') {
          mainTextarea.innerHTML += '\n';
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'AltLeft') {
          mainTextarea.innerHTML += '';
          a.classList.add('active');
          a.classList.add('anime');
        } else if (event.code === 'ControlLeft') {
          mainTextarea.innerHTML += '';
          a.classList.add('active');
          a.classList.add('anime');
          if (this.lang === false) { this.lang = true; } else { this.lang = false; }
        } else if (event.code === 'ShiftLeft') {
          mainTextarea.innerHTML += '';
          a.classList.add('active');
          a.classList.add('anime');
          if (this.lang === true) {
            this.keys.forEach((val, index) => {
              this.caps = 1;
              const whatKey = val;
              whatKey.innerHTML = this.keysEng[index];
            });
          }
          if (this.lang === false) {
            this.keys.forEach((val, index) => {
              this.caps = 1;
              const whatKey = val;
              whatKey.innerHTML = this.keysLayout[index];
            });
          }
        } else {
          mainTextarea.innerHTML += this.keys[i].innerHTML;
          a.classList.add('active');
          a.classList.add('anime');
        }
      }
    });
  }

  keyUpEvent() {
    this.keys = document.querySelectorAll('.keyboard__key');
    this.keys.forEach((el) => el.classList.remove('active'));
    this.keys.forEach((el) => el.classList.remove('anime'));
  }
}

const keyboard = new Keyboard();
keyboard.init();
keyboard.createKeys();
document.addEventListener('keydown', keyboard.keyDownEvent);
document.addEventListener('keyup', keyboard.keyUpEvent);
