class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true

        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this,body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        strokeWeight(5);
        fill("white");
        ellipse(pos.x,pos.y,10);
    }
}