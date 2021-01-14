class Chain {
constructor (bodyA,bodyB)
{

var options ={
    bodyA: bird.body,
    bodyB: conlog.body,
    stiffness: 0.04,
    length:10
}
 this.chain = con.create(options)
World.add(world,this.chain)
}
display(){
push()
    strokeWeight (3)
var posA=this.chain.bodyA.position
var posB =this.chain.bodyB.position
line (posA.x,posA.y,posB.x,posB.y)
pop ()
}
}