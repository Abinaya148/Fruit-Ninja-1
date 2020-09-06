var PLAY = 1;
var END = 0;
var gameState = 1;

var sword, fruit, monster, fruitGroup, enemyGroup, score = 0,
  r, randomFruit;
var swordImage, fruit1, fruit2, fruit3, fruit4, monsterImage, gameOverImage, monsterImage1;
var gameover;

function preload() {
  swordImage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage = loadAnimation("alien1.png", "alien2.png");
  gameOverImage = loadImage("gameover.png");

}

function setup() {
  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.7
  fruitGroup = new Group();
  enemyGroup = new Group();
  gameover = createSprite(200, 200);
  gameover.addImage(gameOverImage);
  gameover.visible = false;
 sword.setCollider("circle",0,0,40);
  sword.debug = true
}

function draw() {
  background("lightblue");

  if (gameState === PLAY) {
    fruits();
    enemy();
    fruits1();
    enemy1();
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    if (sword.isTouching(fruitGroup)) {
      fruitGroup.destroyEach();
      score = score + 2;
    }
    if (sword.isTouching(enemyGroup)) {

      gameState = END;
    }



  } else if (gameState === END) {
    gameover.visible = true;
    sword.destroy();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);

  }

  drawSprites();
  text("Score" + score, 200, 30);
}

function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else if (r == 4) {
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50, 340));
    fruit.velocityX = -(15+3*score/100);
    fruit.setLifetime = 100;
    fruitGroup.add(fruit)
  }
}

function enemy() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100, 300));
    monster.velocityX = -(8+(score/10));
    monster.setLifetime = 50;
    enemyGroup.add(monster)
  }
}
function fruits1() {
  if (World.frameCount % 150 === 0) {
    fruit = createSprite(0, 200, 20, 20);
    fruit.scale = 0.2;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else if (r == 4) {
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50, 330));
    fruit.velocityX = (15+3*score/100);
    fruit.setLifetime = 100;
    fruitGroup.add(fruit)
  }
}

function enemy1() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(0, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100, 250));
    monster.velocityX =(6+(score/10));
    monster.setLifetime = 50;
    enemyGroup.add(monster)
  }
}

