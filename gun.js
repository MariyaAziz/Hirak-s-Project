class Gun{
    constructor(x,y,width,height){
        const options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage('gun.png')
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,-PI/2);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        if(keyIsDown(LEFT_ARROW)){
            angle-=0.01;
            Matter.Body.setAngle(this.body,angle);
        }
        else if(keyIsDown(RIGHT_ARROW) ){
            angle+=0.01;
            Matter.Body.setAngle(this.body,angle);
        }

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }

    shoot(){

    }
}