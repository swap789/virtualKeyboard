(function () {
  var element = document.getElementById("capsLock");

  var toggleCapsLock = false;
  element.addEventListener("click", function () {
    var classes = document.getElementsByClassName("normal-btn-main-container");
    if (!toggleCapsLock) {
      for (let index = 1; index <= 3; index++) {
        classes[index].classList.add("uppercase");
      }
      toggleCapsLock = true;
    } else {
      for (let index = 1; index <= 3; index++) {
        classes[index].classList.remove("uppercase");
      }
      toggleCapsLock = false;
    }
  });
})();
