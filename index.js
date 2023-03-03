for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// this are called named functions
function handleClick() {
  // you can also put the whole function inside the above EventListener where the 'handleClick' is written.
  // alert("I got clicked!");
  makeSound(this.innerHTML); // here we have seen that which key is clicked.
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  makeSound(event.key); // This is how you can take presses key as a string.
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var song1 = new Audio("./sounds/tom-1.mp3");
      song1.play();
      break;
    case "a":
      var song2 = new Audio("./sounds/tom-2.mp3");
      song2.play();
      break;
    case "s":
      var song3 = new Audio("./sounds/tom-3.mp3");
      song3.play();
      break;
    case "d":
      var song4 = new Audio("./sounds/tom-4.mp3");
      song4.play();
      break;
    case "j":
      var song5 = new Audio("./sounds/snare.mp3");
      song5.play();
      break;
    case "k":
      var song6 = new Audio("./sounds/crash.mp3");
      song6.play();
      break;
    case "l":
      var song7 = new Audio("./sounds/kick-bass.mp3");
      song7.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    removeButton();
  }, 100);
  function removeButton() {
    activeButton.classList.remove("pressed");
  }
}

