class ball{

    constructor(x,y){

  var options = {

    restitution:0.5,

  }
this.width=20;
this.height=20;
this.body=Bodies.rectangle(x,y,20,20);

    }

display(){
var pos=this.body.position;

push()
translate(pos.x,pos.y);
fill("white")
rectMode(CENTER)
rect(x,y,this.width,this.height);
pop()


}

}