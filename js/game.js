class Game{
    constructor(){}

    getState(){
        database.ref("gameState").on("value", function(data){
            gameState= data.val();
        })
 }
 update(state){
database.ref("/").update({
    gameState: state
})
 }
async start(){
     if(gameState=== 0){
    player= new Player()
    var playerCountRef= await database.ref("playerCount").once("value");
    if(playerCountRef.exists()){
        playerCount=playerCountRef.val()
        player.getCount();
    }
    form=new Form();
    form.display();
 }
 tank1= createSprite(100,200,30,30);
 tank2= createSprite(300,200,30,30);
 
 tank1.addImage(t1);
 tank1.scale=0.1
 
 tanks=[tank1,tank2];
 }
 play(){
    form.hide();
        textSize(30);
        fill("blue");
        text("Welcome to the Game :)",displayWidth/2-80,100);
        Player.getPlayerInfo()

if(allPlayers!==undefined){
    background("white");
    
var index=0
var x=170
var y=200
for(var plr in allPlayers){
index=index+1
x=allPlayers[plr].x
tanks[index-1].x=x
y=allPlayers[plr].y
tanks[index-1].y=y
if(index===player.index){
 fill("lightgreen")
 ellipse(x,y+55,10,10);
  
}
/*extSize(5)
fill("blue");
textAlign(CENTER);
text(allPlayers[plr].name,x,y-50)
*/
}
} 
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.y-=5
            player.updatePlayer()

        }
        if(keyIsDown(DOWN_ARROW)&&player.index!==null){
            player.y+=5
            player.updatePlayer()

        }
        if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
            player.x+=5
            player.updatePlayer()

        }
        if(keyIsDown(LEFT_ARROW)&&player.index!==null){
            player.x-=5
            player.updatePlayer()

        }
        drawSprites();
}
}