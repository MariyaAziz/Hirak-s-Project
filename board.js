class Board {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        density:1,
        
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      
  
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    //   Matter.Body.setMass(this.body, 1);
    }
  }