var ball;
var position,database;
var gameState=0
var playerCount,form,player,game 
var allPlayers
var tanks,tank1,tank2

function preload(){
t1=loadImage("tank1.png");

}
function setup(){
    database= firebase.database();
    createCanvas(displayWidth-50, displayHeight-200);
game= new Game();
game.getState();
game.start();


}
function draw(){
if(playerCount===2){
game.update(1);
}
if(gameState===1){
clear()
game.play();

}

}
    /*ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database.ref("ball/position").on("value",readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
  database.ref("ball/position").set({x:position.x+x,y:position.y+y})

}

function readPosition(data){
position= data.val()
ball.x= position.x;
ball.y= position .y;
}*/
