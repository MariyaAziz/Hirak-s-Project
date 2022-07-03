class Bullet{
    constructor(x,y){
        var options={
            isStatic:true,
            density:0.1
        };
        this.width=20;
        this.height=40;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }

    shoot(){
        var newAngle=gun.angle*(3.14/180);
        var velocity=p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{
            x:velocity.x*(180/3.14),
            y:velocity.y*(180/3.14)
        })
    }
}