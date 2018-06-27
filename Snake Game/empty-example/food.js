function food(){
    //this.x=random(5,20);
    //this.y=random(5,40);
    this.xPosition=~~random(1,window.innerWidth);
    this.yPosition=~~random(1,window.innerHeight);
    
        
    this.display= function(){
        stroke(0);
        fill(random(210,255),0,0);
        ellipse(this.xPosition, this.yPosition, 10, 10);
    }
}
