class Form{

    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.title= createElement('h2');
    }
 
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
     
        var title2 = createElement("h2");
        title2.html("Car Racing Game");
        title2.position(450,50);
        this.input.position(100,150);
        this.button.position(100,250);
       // this.button.mousePressed(function(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            playerCount = playerCount+1;
            player.index = playerCount;
            this.title.html("Hello "+ this.input.value());
            this.title.position(455,150);
            player.updateCount(playerCount);
            player.update(this.input.value())
        })
    }
    
}
