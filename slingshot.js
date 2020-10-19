class Slingshot{
    constructor(bodyA,B){
        var Options={
            bodyA:bodyA,
            pointB:B,
            stiffness:0.05,
            length:10
        };
       this.pointB=B
        this.band=Matter.Constraint.create(Options)
        World.add(world,this.band);
        this.boy=loadImage("boy.png");
        
    }
    display(){
        if(this.band.bodyA){
        var x1y1=this.band.bodyA.position;
        var x2y2=this.pointB;
            strokeWeight(7);
            stroke(157,88,24);
            line(x1y1.x,x1y1.y,x2y2.x,x2y2.y);
       
    }    
   image(this.boy,302,546,300,300);
}
fly(){
    this.band.bodyA=null;
}
attach(body){
    this.band.bodyA=body;
}
}
 
 
