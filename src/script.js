// selecting our elements
const gameWrap = document.getElementsByClassName("game-Wrap")[0];

// our objects

// our functions
const startGameHandler = (e) => {
  var dataValue = e.target.getAttribute("data-value");

  // Logging the value to the console
  console.log(dataValue);

  gameWrap.innerHTML = "";

  let countDownNum = document.createElement("p");
  countDownNum.classList = "count-Down-Num";

  gameWrap.appendChild(countDownNum);
  countDownNum.textContent = "3";
  setTimeout(() => {
    countDownNum.textContent = "2";
  }, 1000);
  setTimeout(() => {
    countDownNum.textContent = "1";
  }, 2000);
  setTimeout(() => {
    countDownNum.textContent = "GO!";
  }, 3000);
  //   setTimeout(() => {
  //     gameWrap.innerHTML = "";
  //     startGameHandler(e);
  //   }, 4000);
};

// our eventlistners
gameWrap.addEventListener("click", startGameHandler);
