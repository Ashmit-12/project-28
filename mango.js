class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic:true,
          restitution: 0,
          friction:1,
      }
      
      this.radius=radius;
      this.body = Bodies.circle(x,y,radius,options);    
      this.image=loadImage("mango.png");  
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      fill("white");
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,this.radius,this.radius);
  
}

  };
 