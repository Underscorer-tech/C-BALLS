class ball{

    constructor(x,y){

  var options = {

    restitution:0.5,

  }
this.width=30;
this.height=30;
this.body=Bodies.rectangle(x,y,this.width,this.height);

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