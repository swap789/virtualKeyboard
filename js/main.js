var capsLock = document.getElementById("capsLock");
var classes = document.getElementsByClassName("normal-btn-main-container");
var text = document.getElementById("text");
var elementKeyboard = document.getElementById("keyboard");
text.addEventListener("focus", function () {
  elementKeyboard.classList.remove("display-none");
});

var toggleCapsLock = false;

function getFragment() {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const letters1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const letters2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const letters3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "?"];

  const lettersArray = [numbers, letters1, letters2, letters3];
  for (let i = 0; i <= lettersArray.length - 1; i++) {
    const fragment = getListContent(lettersArray[i], i);
    append(fragment, i);
  }
}

function getListContent(arr, index) {
  let fragment = new DocumentFragment();
  let button;
  for (let i = 0; i <= arr.length - 1; i++) {
    button = document.createElement("button");
    button.append(arr[i]);
    button.addEventListener("click", showChar);
    fragment.append(button);
  }
  if (index === 0) {
    button = document.createElement("button");
    button.addEventListener("click", showChar);
    button.innerHTML = `<i class='material-icons'>backspace</i>`;
  }
  if (index === 2) {
    button = document.createElement("button");
    button.addEventListener("click", showChar);
    button.innerHTML = `<i class='material-icons'>keyboard_return</i>`;
  }
  fragment.append(button);
  return fragment;
}

function addEventToSpecialBtn(button, text) {
  button = document.createElement("button");
  button.addEventListener("click", showChar);
  button.innerHTML = `<i class='material-icons'>${text}</i>`;
}

function append(fragment, index) {
  classes[index].append(fragment);
}

function appendSpaceBtn() {
  let fragment = new DocumentFragment();
  let button = document.createElement("button");
  button.addEventListener("click", showChar);
  button.classList.add("space-btn");
  button.innerHTML = "<span class='material-icons'>space_bar</span>";
  fragment.append(button);
  classes[classes.length - 1].append(fragment);
}
appendSpaceBtn();
getFragment();

function showChar(event) {
  const key = event.target.innerText;
  switch (key) {
    case "backspace":
      text.value += "";
      text.focus();
      break;
    case "keyboard_return":
      text.value += "\n";
      text.focus();
      break;
    case "space_bar":
      text.value += " ";
      text.focus();
      break;
    case "check_circle":
      elementKeyboard.classList.add("display-none");
      break;
    default:
      text.value += event.target.innerText;
      text.focus();
      break;
  }
}

capsLock.addEventListener("click", function () {
  capsLock.classList.add("keyboard-key--active");
  const elements = document.querySelectorAll("button");
  if (!toggleCapsLock) {
    for (let i = 0, element; (element = elements[i++]); ) {
      if (element.textContent.length === 1) {
        element.textContent = element.textContent.toUpperCase();
      }
    }
    toggleCapsLock = true;
  } else {
    for (let i = 0, element; (element = elements[i++]); ) {
      if (element.textContent.length === 1) {
        element.textContent = element.textContent.toLowerCase();
      }
    }
    capsLock.classList.remove("keyboard-key--active");
    toggleCapsLock = false;
  }
});
