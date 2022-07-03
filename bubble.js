class Bubble{
    constructor(x,y,r,img){
        var options={
            friction:0,
            restitution:0.1,
            density:0.2,
            frictionAir:1
        }
        this.r=r;
        this.itemImg=img;
        this.image=loadImage('bubble.png')
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.itemImg,3,0,this.r+50,this.r+20)
        image(this.image,0,0,this.r+80,this.r+80)
        // ellipseMode(RADIUS)
        // ellipse(0,0,this.r,this.r)
        
        pop();
       // Matter.Body.setMass(this.body, 1);

    }
}