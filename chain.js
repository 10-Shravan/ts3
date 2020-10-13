class Chain{
    constructor(a, pointB){
        var options = {
            bodyA: a,
            pointB: pointB,
            stiffness: 1,
            length: 500
        }
        
    
       
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    
    
   
    display(){
               
 var pointA = this.chain.bodyA.position;
 var pointB = this.pointB;
    stroke (235) ;       
     line (pointA.x,pointA.y,pointB.x,pointB.y)       
     }
    
    
}