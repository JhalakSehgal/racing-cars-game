class Player{
    constructor(){
        this.index= null;
        this.ditance = 0;
        this.name = null;

    }
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value", (data)=>{
            playerCount = data.val();

        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
}