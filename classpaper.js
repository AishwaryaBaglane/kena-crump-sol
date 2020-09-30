class paper{
constructor(){
    var options = {
     isStatic: false,
     restitution: 0.3,
     friction: 0.5,
     density: 1.2   
    }
    this.width=30;
this.height=30;
this.body = Bodies.circle(100,580,30,options)

World.add(world,this.body);
}
display(){
var posi = this.body.position;
push()
translate(posi.x, posi.y);
			rectMode(CENTER)
			strokeWeight(3);
			
			ellipse(0,0,this.width, this.height);


}

}