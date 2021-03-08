class Ball {
  //----ONLY X AND Y , WIDTH AND HEIGHT IS FIXED AT 50
    constructor(x, y) {
      var options = {
     
        'density':1,
        'frictionAir': 0.005,
        
      };
      this.body = Bodies.circle(x, y, 50, options);
      this.r = 50;

      World.add(myWorld, this.body);
    };
    display(){
      //====CHANGING POSITION WITH MOUSE
      var pos = this.body.position;
    //  pos.x = mouseX;
      //pos.y = mouseY;

      var angle = this.body.angle;
      angleMode(RADIANS)
      push();
      translate(pos.x, pos.y);
      rotate(angle);


      fill('red')
      
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      pop();
    };
  };
  