class Bob{

    constructor (x,y,radius)
    {
    var options = 
    {   isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.body = Bodies.circle(x, y, radius, options);
    this.body.radius = radius;
    
    World.add(world, this.body);
    }
    
    display()
    {
       
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}