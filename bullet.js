class Bullet{
constructor(x,y,vx,vy,d,n,i){
    this.d=d
    this.sprite=createSprite(x,y,windowWidth/32, windowHeight/32)
    this.sprite.shapeColor="yellow"
    this.sprite.setVelocity(vx,vy)
    this.sprite.setCollider("rectangle", 0, 0, windowWidth/32, windowHeight/32)
    //this.sprite.debug=true
    this.d=d
    this.name=n
    bulsD.push(d)
    console.log(this.name)
   if(i===1){var bulletIndex = "Bullets/"+this.name+"/b"+buls.length;
      database.ref(bulletIndex).set({
        positionX: x,
        positionY: y,
        velox:vx,
        veloy:vy,
        damage: d,
      })
}
}

Destroy(i){
    buls[i].sprite.remove();buls.splice(i,1)
    var ref = database.ref("Bullets/"+this.name+"/b"+i);ref.remove()
    var ref = database.ref("Bullets/"+this.name+"/b"+buls.length);ref.remove()
}
update(i){
    var bulletIndex = "Bullets/"+this.name+"/b"+i;
      database.ref(bulletIndex).set({
        positionX: this.sprite.position.x,
        positionY: this.sprite.position.y,
        velox:this.sprite.velocity.x,
        veloy:this.sprite.velocity.y,
        damage: this.d,
      })
}

static getBulletsInfo(){
  var bulletInfoRef=database.ref("Bullets");
  bulletInfoRef.on("value", data=>{
    allBullets=data.val()
  })
  }
}
