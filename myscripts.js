var questions = [
        "Stock Norms for Spares is 180 days",
        "The three parameters, Service & Spares Coverage, Dealer Profit, & Customer Experience are interlinked",
        "Interest paid on long term loans is 15%",
        "Service Marketing Expenses are fixed expenses",
        "It is important for an ASM to collaborate with his sales counterparts while formulating a market strategy",
        "Stock Norms for Lubes is 30 days",
        "Interest cost on short term loan is 12% p.a. ",
        "Creating Income and Expense Statement helps calculate Profitability & ROI",
        "ROCE = Capital Employed / EBIT",
        "A thorough study of the Customer, Competitors & Channels is important for assessing the market"
    ];

var answers = [1, 1, 0, 0, 1, 1, 0, 1, 0, 1];
var index = 0, score = 0;

function myFunction(x) {
    if(x == answers[index]){
        score = score +1;
    }
    index = index + 1;
    document.getElementById("quest").innerHTML = questions[index];
    document.getElementById("score").innerHTML = score;

    if(index == 10){
        document.getElementById("startButton").disabled = false;
        document.getElementById("trueButton").disabled = true;
        document.getElementById("falseButton").disabled = true;
        document.getElementById("quest").innerHTML = "--";
        document.getElementById("score").innerHTML = "--";
        document.getElementById("finalScore").innerHTML = "YOUR FINAL SCORE: " + score;
    }

    // setTimeout(myFunction, 5000);
}

function start() {
    index = 0; score =0;
    document.getElementById("quest").innerHTML = questions[index];
    document.getElementById("score").innerHTML = score;
    document.getElementById("startButton").disabled = true;
    document.getElementById("trueButton").disabled = false;
    document.getElementById("falseButton").disabled = false;
}