const mainSection = document.createElement('section');
    mainSection.className = "mainSection";
const mainTitle = document.createElement('h1');
    mainTitle.innerHTML = "RSS Виртуальная клавиатура";
const mainTextarea = document.createElement('textarea');
    mainTextarea.rows = 5;
    mainTextarea.cols = 50;
const keyboard = document.createElement('div');
    keyboard.className = "keyboard";
const keyboardRow = document.createElement('div');
    keyboardRow1.className = "keyboard-row";
document.body.append(mainSection);
mainSection.append(mainTitle);
mainSection.append(mainTextarea);
mainSection.append(keyboard);
keyboard.append(keyboardRow);
keyboard.append(keyboardRow);
keyboard.append(keyboardRow);
keyboard.append(keyboardRow);
keyboard.append(keyboardRow);