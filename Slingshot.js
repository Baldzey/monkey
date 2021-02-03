class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 0.1
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

   
    display(){
   image(this.sling1, 250,25)
   image(this.sling2, 225, 25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
               
            stroke(48, 23, 8);
            if(pointA.x < 225){
                strokeWeight(7);
                line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 50, pointB.y - 20);
                image(this.sling3, pointA.x - 30, pointA.y- 10, 15, 30)
                
            }
            else {
                strokeWeight(4)
                
                line(pointA.x + 25, pointA.y, pointB.x, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 50, pointB.y - 20);
                image(this.sling3, pointA.x + 20, pointA.y- 10, 15, 30)
            }
            pop();
            
        }
    }
    
}