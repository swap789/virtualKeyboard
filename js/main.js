(function () {
  var element = document.getElementById("capsLock");
  var classes = document.getElementsByClassName("normal-btn-main-container");
  var text = document.getElementById("text");
  var elementKeyboard = document.getElementById("keyboard");
  text.addEventListener("focus", function () {
    elementKeyboard.classList.remove("display-none");
  });
  //   text.addEventListener("blur", function () {
  //     element.classList.add("display-none");
  //   });

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
    let p;
    for (let i = 0; i <= arr.length - 1; i++) {
      p = document.createElement("p");
      p.append(arr[i]);
      p.addEventListener("click", showChar);
      fragment.append(p);
    }
    if (index === 0) {
      p = document.createElement("p");
      p.addEventListener("click", showChar);
      p.innerHTML += "<i class='material-icons'>backspace</i>";
    }
    if (index === 2) {
      p = document.createElement("p");
      p.addEventListener("click", showChar);
      p.innerHTML = "<i class='material-icons'>keyboard_return</i>";
    }
    if (index === 2) {
      p = document.createElement("p");
      p.addEventListener("click", showChar);
      p.innerHTML = "<i class='material-icons'>keyboard_return</i>";
    }
    fragment.append(p);
    return fragment;
  }

  function append(fragment, index) {
    classes[index].append(fragment);
  }

  function appendSpaceBtn() {
    let fragment = new DocumentFragment();
    let p = document.createElement("p");
    p.addEventListener("click", showChar);
    p.classList.add("space-btn");
    p.innerHTML = "<span class='material-icons'>space_bar</span>";
    fragment.append(p);
    classes[classes.length - 1].append(fragment);
  }
  appendSpaceBtn();

  getFragment();

  function showChar(event) {
    console.log(event);
    console.log(event.target.innerText);
    const key = event.target.innerText;
    switch (key) {
      case "backspace":
        text.value += "";
        break;

      case "keyboard_return":
        text.value += "/n";
        break;
      case "space_bar":
        text.value += " ";
        break;
      default:
        text.value += event.target.innerText;
        break;
    }
  }

  element.addEventListener("click", function () {
    element.classList.add("keyboard-key--active");
    if (!toggleCapsLock) {
      for (let index = 1; index <= 3; index++) {
        classes[index].classList.add("uppercase");
      }
      toggleCapsLock = true;
    } else {
      for (let index = 1; index <= 3; index++) {
        classes[index].classList.remove("uppercase");
      }
      element.classList.remove("keyboard-key--active");
      toggleCapsLock = false;
    }
  });
})();
