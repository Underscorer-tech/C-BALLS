class ball{

constructor(x,y,r){

  var options = {
  //isStatic:true,
    restitution:0.2,
    friction:0.5,
    density:1,

  }
this.r=r;
this.body=Bodies.circle(x,y,r,options);
this.image=loadImage("cball1.jpg");
World.add(world,this.body)

}

display(){

  var pos = this.body.position;
push()
translate(pos.x,pos.y)
fill("black");
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop();


}


}