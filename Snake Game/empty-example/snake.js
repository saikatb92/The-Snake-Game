var snakeArray = [];
var head;
var tail;
var prevKeyCode=79;
xSpeed=snakePieceSizeX;
ySpeed=snakePieceSizeY;

function snake(){
snakeArray[0]=new snakePiece();
head=0;
tail=0;

this.reset = function(){
    tail=0;
    snakeArray[head].xPosition=initialPosX;
    snakeArray[head].yPosition=initialPosY;
    keyCode=79;
}    
    
this.move = function(){
    if(keyCode>=37 && keyCode<=40){
        if(abs(prevKeyCode-keyCode)!=2){
            for(var i = tail; i>head; i--){
               snakeArray[i].xPosition = snakeArray[i-1].xPosition; 
               snakeArray[i].yPosition = snakeArray[i-1].yPosition;
            }
            if(keyCode==37) snakeArray[head].xPosition-=xSpeed;
            if(keyCode==39) snakeArray[head].xPosition+=xSpeed;
            if(keyCode==38) snakeArray[head].yPosition-=ySpeed;
            if(keyCode==40) snakeArray[head].yPosition+=ySpeed;
           
            prevKeyCode=keyCode;
        }
    
    else{
        keyCode=prevKeyCode;
    }
} 
  if(snakeArray[head].xPosition<0 || snakeArray[head].xPosition>=window.innerWidth || snakeArray[head].yPosition<0 || snakeArray[head].yPosition>=window.innerHeight)
  this.reset(); 
   
  for(var p = 1; p< snakeArray.length; p++){   
   if(dist(snakeArray[head].xPosition, snakeArray[head].yPosition, snakeArray[p].xPosition, snakeArray[p].yPosition)<snakePieceSizeX)    
   this.reset();
    
  }
}


this.eatsFood = function(){
    if(dist(snakeArray[head].xPosition+(snakePieceSizeX/2), snakeArray[head].yPosition+(snakePieceSizeY/2), food[foodNo].xPosition, food[foodNo].yPosition) <= snakePieceSizeX){
     tail++;
     snakeArray[tail]=new snakePiece();
     snakeArray[tail].xPosition=snakeArray[tail-1].xPosition-snakePieceSizeX;
     snakeArray[tail].yPosition=snakeArray[tail-1].yPosition;
     return true;
    }
    else
    return false;
}


this.display = function(){
   for(var j = head; j<=tail; j++){
    stroke(255);
    fill(30,140,20);
    rect(snakeArray[j].xPosition, snakeArray[j].yPosition, snakeArray[j].x, snakeArray[j].y);
   } 
}
}