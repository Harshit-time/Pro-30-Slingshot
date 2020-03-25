class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.sling1 = loadImage("Sprites/sling1.png");
        this.sling2 = loadImage("Sprites/sling2.png");
        this.sling3 = loadImage("Sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,180);
        image(this.sling2,170,180);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,10,23);
            }
            else{
                strokeWeight(4);
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,10,23);
            }
        }
    }

    
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
    
}


