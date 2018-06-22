var playing=false;
var score;
var action;
var timeRemaining;
var correctAnswer;




//if we click on the START/RESET
document.getElementById('startReset').onclick=function(){
    //if we are playing
    if(playing==true){
        location.reload(); //reload page
    }else{
        //if we are not playing
        
        //change mode to playing
        playing=true;
        
        //set score zero    
        score=0; document.getElementById('scorevalue').innerHTML=score;   
        
       //show count down box
            show("timeRemaining");
            timeRemaining=60;
            document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        
        //hide Game Over message
         hide("gameOver");
        
       //CHANGE BUTTON TO RESET
        document.getElementById('startReset').innerHTML="Reset Game";
        
         // reduce time by 1 sec in loop
        
        startCountdown();
        
        //generate a new Q/A
        generateQA();
    }
}
 
//clicking on ans box

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    //if we are playing
    if(playing==true){//yes
        if(this.innerHTML==correctAnswer){
            //correct ans
            
            //increase score  value
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //generate new Q/A
            
            generateQA();
            
            
        }else{
            //wrong ans
            show("wrong");
            hide("correct");
            setTimeout(function(){
                hide("wrong");
            },1000)
            
           
        }
    }
}
}
 //if we click on the START/RESET  
    //if we are playing
        //reload page
 //if we are not playing
    //set score zero
    //show count down box
    // reduce time by 1 sec in loop
        //if time left
            //yes > continue
            // not> 
                //SHOW GAME OVER
                //CHANGE BUTTON TO RESET
                //SHOW SCORE
                //GENERATE NEW Q/A

// if we click on answer box
    //if not playing > no action
    //if plaing
        //corrent
            //yes
                //increase score
                //show correct box for 1 sec
                //generate Q/a
            //no
                //SHOW TRY AGAIN BOX FOR ONE SEC
                
//functions


//start counter

function startCountdown(){
    action=setInterval(function(){
       timeRemaining -=1; 
        document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        if(timeRemaining==0){
            //gameOver
            stopCountDown();
           show("gameOver");
            
            document.getElementById('gameOver').innerHTML="<p>Game Over</p><p>Your score is "+ score+".</p>";
            
           hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById('startReset').innerHTML="Start Game";
           
        }
    },1000)
    
    
}

//stop counter
function stopCountDown(){
    clearInterval(action);
}


//hide some element
function hide(id){
    document.getElementById(id).style.display="none";
}

//show some element
function show(id){
    document.getElementById(id).style.display="block";
}

//generate Q/A

function generateQA(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    correctAnswer=x*y;
    document.getElementById("question").innerHTML= x+"x"+y;

    var correctPositiom=1+Math.round(Math.random()*3);
        document.getElementById("box"+correctPositiom).innerHTML=correctAnswer; //fill one box with the correct ans
    
    
    
    //fill other boxes with wrong answers
    
    var answers=[correctAnswer];
    
    for(i=1;i<5;i++){
        
        if(i!=correctPositiom){
            var wrongAnswer;
            
            //differentiating wrongAnswer value and correctAnswerValue
            do{
                wrongAnswer=(1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9))
            
           }while(answers.indexOf(wrongAnswer)>-1)
               
            //cheking all wrong answers are same or not
//            
//            if(result!=wrongAnswer){
//                result=wrongAnswer; 
               document.getElementById('box'+i).innerHTML=wrongAnswer;
                answers.push();
            
        }
    }
    
}