class Player{
    constructor(){
        this.name=null;
       this.x=0
       this.y=0
        this.index=null;
        }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(Count){
database.ref("/").update({playerCount:Count});
    }

    updatePlayer(){
var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    x:this.x,
    y:this.y
})
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers= data.val()
        })
    }
}

