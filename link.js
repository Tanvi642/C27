class Link {
    constructor(bodyA,bodyB){
        var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10
        }
        this.link = Constraint.create(options);
        World.add(world,this.link);
    }
    display(){
        var posA = this.link.bodyA.position;
        var posB = this.link.bodyB.position;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}