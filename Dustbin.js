class Dustbin{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})

        World.add(world,this.body);
    }

    display(){
        const pos = this.body.position;
        rectMode(CENTER)
        fill('green')
        rect(pos.x,pos.y,this.width,this.height);
    }
}


