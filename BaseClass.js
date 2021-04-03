class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
     // fill("white")  
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // ellipse(this.body.position.x-200,this.body.position.y-110,10,10)
       this.image = loadImage("base.png");
        World.add(world, this.body);
       
      }
      display(){
       // 
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}