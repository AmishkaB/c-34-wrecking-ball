class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
       
    }


    display(){
 

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            push()
            stroke('cyan')
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        
        }
    }
    
}