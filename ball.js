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
translate(pos.x,pos.y);
push()
fill("white")
rectMode(CENTER)
rect(this.body,0,0,20,20);
pop()


}

}