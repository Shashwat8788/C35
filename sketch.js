var ball;
var dbase;
var pos;

function setup(){
    dbase = firebase.database();
    console.log(dbase);

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballref = dbase.ref("position");
    ballref.on("value",readpos,showerror);
}

function draw(){
    background("white");
    if(pos!==undifined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
    
    drawSprites();
}

function writePosition(x,y){
    

    var bposref = dbase.ref(position) .set({
        x:pos.x+x,
        y:pos.y+y
    })
}

function readpos(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}

function showerror(){
    console.log("error");
}
