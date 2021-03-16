var gameState = "game";
var startButton, startButtonImg;
var path, pathImg;
var playButton, playButtonImg;
var player, playerImg;
var coinImg, coinsGroup;

function preload() {
  startButtonImg = loadImage("Images/Start Button.png");
  pathImg = loadImage("Images/Path.jpg");
  playButtonImg = loadImage("Images/Play Button.png");
  playerImg = loadImage("Images/Player.png");
  coinImg = loadImage("Images/Coin.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startButton = createSprite(windowWidth/2 - 30, windowHeight/2 + 40, 20, 20);
  startButton.addImage("startButton", startButtonImg);
  startButton.scale = 0.5;
  startButton.visible = false;

  playButton = createSprite(windowWidth/2 - 30, windowHeight/2 + 200, 20, 20);
  playButton.addImage("playButton", playButtonImg);
  playButton.scale = 0.5;
  playButton.visible = false;

  path = createSprite(windowWidth/2, windowHeight/2, 500, 200);
  path.addImage("path", pathImg);
  path.scale = 2;
  path.visible = false;
  path.x = path.width/2;

  player = createSprite(80, windowHeight/2 - 100, 20, 20);
  player.addImage("player", playerImg);
  player.scale = 0.5;
  player.visible = false;

  coinsGroup = new Group();
}

function draw() {
  background(0);

  console.log(windowWidth);

  if (keyDown("r")) {
    gameState = "start";
  }

  if (gameState === "start") {
    fill("red");
    textSize(50);
    text("My Infinite Runner Game", 550, 50);

    startButton.visible = true;
    path.visible = false;
    playButton.visible = false;

    if (mousePressedOver(startButton)) {
      gameState = "instructions";
    }
  }

  if (gameState === "instructions") {
    startButton.visible = false;
    playButton.visible = true;

    fill("red");
    textSize(50);
    text("Instructions", 700, 50);

    fill("white");
    textSize(20);
    text("1) Collect the Coins", 0, 150);

    fill("white");
    textSize(20);
    text("2) Avoid the Bombs", 0, 170);

    fill("white");
    textSize(20);
    text("3) It is a SinglePlayer Game that Ends When You Touch A Bomb", 0, 190);

    if (mousePressedOver(playButton)) {
      gameState = "game";
    }
  }

  if (gameState === "game") {
    playButton.visible = false;
  }

  if (gameState === "game") {
    path.visible = true;
    player.visible = true;

    path.velocityX = -3;

    if (path.x < 0) {
      path.x = path.width/2;
    }

    if (keyDown("space")) {
      player.velocityY = -12;
    }

    player.velocityY = player.velocitY + 0.8;

    spawnCoins();
  }

  drawSprites();
}

function spawnCoins () {
  if (frameCount % 80 === 0) {
  var coin = createSprite(windowWidth/2, windowHeight/2 + 20, 20, 20);
  coin.addImage("coin", coinImg);
  coin.scale = 0.25;
  coin.velocityX = -3;
  coin.lifetime = 569;
  }
}