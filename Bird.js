class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    let position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    if(this.body.speed > 10 && this.body.position.y < 350 && this.body.position.x > 200){
      for(var i = 0; i < this.trajectory.length; i++){
        //console.log(this.trajectory[i]);
        image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
      }
    }
    else{
      this.trajectory.splice(0,this.trajectory.length);
    }
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
