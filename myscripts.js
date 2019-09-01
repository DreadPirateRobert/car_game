var questions = [
        "--",
        "Q1) Stock Norms for Spares is 180 days",
        "Q2) The three parameters, Service & Spares \n Coverage, Customer Experience interlinked",
        "Q3) Interest paid on long term loans is 15%",
        "Q4) Service Marketing Expenses are fixed \n expenses",
        "Q5) It is important for an ASM to collaborate \n while formulating a market strategy",
        "Q6) Stock Norms for Lubes is 30 days",
        "Q7) Interest cost on short term loan is \n 12% p.a. ",
        "Q8) Creating Income and Expense Statement \n helps calculate Profitability & ROI",
        "Q9) ROCE = Capital Employed / EBIT",
        "Q10) A thorough study of the Customer, Competitors \n is important for the market",
        "--",
        "--"
    ];

var answers = [-1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1];
var index = 0, score = 0, x, life = 3;

function myFunction(x) {
    var x = null;
    if(myGamePiece.x >= 240){
        x = 0;
    }else{
        x = 1;
    }
    if(x == answers[index] ){
        score = score +1;
    }else if(index > 0 && index <=10){
        life = life - 1;
    }

    if(life == 0){
        index = 11;
    }
    index = index + 1;
    document.getElementById("quest").innerHTML = questions[index];
    document.getElementById("score").innerHTML = score;
    document.getElementById("life").innerHTML = life;

    //Call Canvas Function
    clearCanvas();

    if(index >= 11){
        document.getElementById("startButton").disabled = false;
        document.getElementById("trueButton").disabled = true;
        document.getElementById("falseButton").disabled = true;
        document.getElementById("quest").innerHTML = "--";
        document.getElementById("score").innerHTML = "--";
        document.getElementById("life").innerHTML = "--";
        document.getElementById("finalScore").innerHTML = "YOUR FINAL SCORE: " + score;
        document.getElementById("leftdir").disabled = true;
        document.getElementById("rightdir").disabled = true;
    }

    console.log("X Pos: " + myGamePiece.x);
    console.log("Y Pos: " + myGamePiece.y);
    
    setTimeout(myFunction, 5000);
}

function start() {
    index = 0; score = 0; life = 3;
    document.getElementById("quest").innerHTML = questions[index];
    document.getElementById("score").innerHTML = score;
    document.getElementById("life").innerHTML = life;
    document.getElementById("startButton").disabled = true;
    document.getElementById("trueButton").disabled = false;
    document.getElementById("falseButton").disabled = false;
    document.getElementById("leftdir").disabled = false;
    document.getElementById("rightdir").disabled = false;
    myFunction();
}

var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 192, 170);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = updateGameArea();

    //     ctx = myGameArea.context;
    //     base_image2 = new Image();
    //     base_image2.src = 'CrazyCarsAssets/car_challenge_road.png';
    //     base_image2.onload = function(){
    //     ctx.drawImage(base_image2, 0, 0, base_image2.width, base_image2.height, 100, 0, 280, 270);
    // }
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;   
    
    
    this.update = function() {
        ctx = myGameArea.context;
        // ctx.fillStyle = color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
       

        // ctx = myGameArea.context;
        base_image2 = new Image();
        base_image2.src = 'CrazyCarsAssets/car_challenge_road.png';
        base_image2.onload = function(){
            ctx.drawImage(base_image2, 0, 0, base_image2.width, base_image2.height, 100, 0, 280, 270);
        }

        base_image = new Image();
        base_image.src = 'car.png';
        base_image.onload = function(){
            ctx.drawImage(base_image, myGamePiece.x, myGamePiece.y);
        }
       

         // ctx = myGameArea.context;
         base_image3 = new Image();
         base_image3.src = 'CrazyCarsAssets/tree_1.png';
         base_image3.onload = function(){
             ctx.drawImage(base_image3, 0, 0, base_image3.width, base_image3.height, 0, 0, 100, 270);
         }

         // ctx = myGameArea.context;
         base_image4 = new Image();
         base_image4.src = 'CrazyCarsAssets/tree_1.png';
         base_image4.onload = function(){
             ctx.drawImage(base_image4, 0, 0, base_image4.width, base_image4.height, 280, 0, 480, 270);
         }

         // Draw White Box
        base_image6 = new Image();
        base_image6.src = 'CrazyCarsAssets/white_box2.png';
        base_image6.onload = function(){
            ctx.drawImage(base_image6, 0, 0, base_image6.width, base_image6.height, 100, 0, 280, 90);
            ctx.fillText("LIFE:  " + life, 160, 25);
            ctx.fillText("SCORE:  " + score, 300, 25);
            ctx.fillText("Q) " + questions[index], 125, 45);
            ctx.fillText("TRUE", 160, 70);
            ctx.fillText("FALSE", 300, 70);
        }

        
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function moveup() {
    myGamePiece.y -= 96; 
}

function movedown() {
    myGamePiece.y += 96; 
}

function moveleft() {
    // if(myGameArea.x - 96 >= 50){
        myGamePiece.x -= 96;
    clearCanvas();
    // ctx.clearRect(100, 0, 280, 270);

    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(20, 20, 150, 100);
}

function moveright() {
    if(myGamePiece.x + 96 <=380){
        myGamePiece.x += 96;
    }
    clearCanvas();     

    // ctx.font = "30px Comic Sans MS";
    // ctx.fillStyle = "red";
    // ctx.textAlign = "center";
    // ctx.fillText("Hello World", 0, 0); 
    
}

function clearCanvas(){

    // Draw Road
    base_image2 = new Image();
    base_image2.src = 'CrazyCarsAssets/car_challenge_road.png';
    base_image2.onload = function(){
        ctx.drawImage(base_image2, 0, 0, base_image2.width, base_image2.height, 100, 0, 280, 270);
    }

    //Draw Car
    base_image = new Image();
    base_image.src = 'car.png';
    base_image.onload = function(){
        ctx.drawImage(base_image, myGamePiece.x, myGamePiece.y);
    }

    // Draw White Box
    base_image6 = new Image();
    base_image6.src = 'CrazyCarsAssets/white_box2.png';
    base_image6.onload = function(){
        ctx.drawImage(base_image6, 0, 0, base_image6.width, base_image6.height, 100, 0, 280, 90);
        ctx.fillText("LIFE:  " + life, 160, 25);
        ctx.fillText("SCORE:  " + score, 300, 25);

        var lines = questions[index].split('\n');
        var lineheight = 10;
        for (var i = 0; i<lines.length; i++)
            ctx.fillText(lines[i], 125, 45 + (i*lineheight) );

        // ctx.fillText("Q) " + questions[index], 125, 45);
        ctx.fillText("TRUE", 160, 70);
        ctx.fillText("FALSE", 300, 70);
    }

}