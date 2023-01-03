class Brick{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("Images/Brick.png")
        World.add(world, this,body);
    }


    display()
    {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height)
        pop();
    }
}