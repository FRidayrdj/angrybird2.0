class BaseClass
{
constructor(x,y,width,height,angle){
    var option = {
        restitution: 0.8,
        friction: 1.5,
        density:2
    }
    this.body= Bodies.rectangle(x,y,width,height, option);
    this.width=width;
    this.height=height;
    this.img=loadImage("Images/base.png");
    World.add(world,this.body);
}
display() 
{
    var pos= this.body.position;
    var angle=this.body.angle;

    push();

    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("red");
    strokeWeight(4);
    stroke("red");
    image(this.img,0,0,this.width, this.height);
    pop();
}
}