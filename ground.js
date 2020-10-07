class Ground
{
constructor(x,y,width,height){
    var option = {
        isStatic:true
    }
    this.body= Bodies.rectangle(x,y,width,height, option);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

    this.Ground=loadImage("Images/ground.png");
}
display() {
    var pos= this.body.position;
    push();
    imageMode(CENTER);

    fill("brown");
    image(this.Ground,pos.x, pos.y,this.width, this.height);
    pop();
}
}