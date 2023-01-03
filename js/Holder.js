class Holder {
    constructor(x, y, width, height, ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.HolderIMG = loadImage("assets/BrickDispenser.png");
    }




display(){

push();
translate(this.x, this.y);
imageMode(CENTER);
image(this.HolderIMG, 0, 0, this.width, this.height);
pop();
noFill();
 }
}


