var canvas;
var backgroundImage;
var player1, player2, coins, box;


function preload() {
  console.log("Loading player images...");
  backgroundImage = loadImage("./assets/background.png");
  player1Img = loadImage("./assets/player1.png");
  player2Img = loadImage("./assets/player2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  player1 = createSprite(455, windowHeight/2);
  player1.addImage("player1", player1Img);
  player1.scale = 0.070;

  player2 = createSprite(510,510);
  player2.addImage("player2", player2Img);
  player2.scale = 0.1;


}

function draw() {

background(backgroundImage);

if (keyIsDown(UP_ARROW)) {
  console.log("Up arrow key pressed!");
  player1.velocityY = 50;
};

/*if (keyIsDown(LEFT_ARROW)) {
  player1.velocityX -= 20;
}

if (keyIsDown(RIGHT_ARROW)) {
  player1.velocityX += 20;
}
*/

drawSprites();
}



