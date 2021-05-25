class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement("h2");

    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('h3');
        title.html("Racing Cars ");
        title.position(140,0);

       this.input.position(140,50);
       this.button.position(250,200);

        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this.button.hide();
                player.name= this.input.value();
                playerCount+=1;
                player.index=playerCount;

                player.updateCount(playerCount);
                this.greeting.html("Hello" + player.name)
                this.greeting.position(140,170);
            }
        )

    }
}
