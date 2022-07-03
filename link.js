class Link{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
        
        }
        this.link=Constraint.create(options);
        World.add(world,this.link);
    }

    display(){
        var bodyA=this.link.bodyA.position;
        var bodyB=this.link.bodyB.position;
        noStroke()
        //strokeWeight(1);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
    }
}