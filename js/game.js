class Game{
    constructor(){}

    getState(){
        var gameStateref= database.ref('gameState');
        gameStateref.on("value", (data)=>{
            gameState = data.val();

        })
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
     if (gameState === 0){
         player = new Player();
         var playerCountref = await database.ref('playerCount').once("value");
         if(playerCountref.exists()){
             playerCount = playerCountref.val();
             player.getCount();
         }
         form = new Form();
         form.display();

     }
    }

    play(){
        form.hide();
        textSize(40);
        text( "Game has Started", 120,100)
    }
}
