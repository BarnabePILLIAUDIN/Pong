//Getting html elements
const elRacket1 = document.getElementById("raquette1");
const elRacket2 = document.getElementById("raquette2");
const elBall = document.getElementById("ball");

//an object with all the data of the rackets and balls
const racket1 = {
  element: elRacket1,
  y: 50,
};

const racket2 = {
  element: elRacket2,
  y: 50,
};

const ball = {
  element: elBall,
  x: 50,
  y: 50,
};

//Variable that will help us to stop the game if the ball went out
let play = true;

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//Random variable that will tell us if the ball is going up or down and right or left
let directionX = getRandom(0, 100) % 2 === 0 ? 1 : -1;
let directionY = getRandom(0, 100) % 2 === 0 ? 1 : -1;

//Funtion that controll the movement of the ball
const mooveBall = () => {
  ball.x += 0.5 * directionX;
  ball.y += 0.5 * directionY;

  ball.element.style.top = `${ball.y}%`;
  ball.element.style.left = `${ball.x}%`;

  //checking if the ball is on the edge on the Y axis
  if (ball.y >= 99) {
    directionY = directionY * -1;
  } else if (ball.y <= 1) {
    directionY = directionY * -1;
  }

  //checking if the ball is on the edge on the X axis
  if (ball.x <= 1) {
    if (ball.y >= racket1.y - 5 && ball.y <= racket1.y + 5) {
      directionX = directionX * -1;
    } else {
      //What we do when the game is finished
      play = false;
      alert("Player 1 lost");
      return;
    }
  } else if (ball.x >= 99) {
    if (ball.y >= racket2.y - 5 && ball.y <= racket2.y + 5) {
      36.3;
      directionX = directionX * -1;
    } else {
      //What we do when the game is finished

      play = false;
      alert("Player2 lost");
      return;
    }
  }
  if (play) {
    //If the game is not over we will move the ball in 0.025s
    setTimeout(mooveBall, 25);
  }
};

//Functions to control the rackets
const racketUp = (racket) => {
  if (racket.y < 8) {
    return;
  }
  racket.y -= 2;
  racket.element.style.top = `${racket.y}%`;
};

const racketDown = (racket) => {
  if (racket.y >= 94) {
    return;
  }
  racket.y += 2;
  racket.element.style.top = `${racket.y}%`;
};

//Calling the right function when the right key is pressed
window.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "z":
      racketUp(racket1);
      break;
    case "s":
      racketDown(racket1);
      break;
    case "9":
      racketUp(racket2);
      break;
    case "3":
      racket2(racket2);
    default:
      return;
  }
});

//Giving the instructions when the page is loaded
window.addEventListener("load", () => {
  alert(
    "Press z or s to control the left racket and press 3 or 9 to controll the right racket"
  );
});

//Start of the ball movement
mooveBall();
