class Form{
    constructor(){
        this.input= createInput("Enter Your Name");
        this.button= createButton("PLAY");
        this.greeting= createElement("h3");
        this.reset= createButton("RESET");
    }
     hide(){
this.greeting.hide()
this.button.hide()
this.input.hide()
}
    display(){
        var title= createElement("h1");
        title.html("TANK DESTROYER SIMULATOR");
        title.position(displayWidth/2-125,0);
        this.input.position(displayWidth/2-70,160);
        this.button.position(displayWidth/2-70,200);
        this.reset.position(40,20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref("players").remove()
            
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this. button.hide();
            player.name= this.input.value()
            playerCount+=1
            player.index=playerCount;
            player.updatePlayer();
            player.updateCount(playerCount);
            this.greeting.html("Are You Ready? :) "+player.name);
            this.greeting.position(displayWidth/2-80,160);
        })
    }
}