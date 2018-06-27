var food=[];
var foodNo = 0;
var totalFoods=20;
var snake;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    
    for(var i = 0; i<totalFoods; i++)
    food[i] = new food();
    
    snake=new snake();
    frameRate(5);
}

function draw(){
    background(0);
    if(snake.eatsFood()) {
    foodNo++;
    } 
    
    food[foodNo].display();
    snake.display();
    
    snake.move();
    
}