//---Challenge 1: Your Age in Days

function ageInDays() {
var birthYear = prompt('What Year were you born...Good Friend ?');
var ageInDayss=(2020-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss +' days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
} 

//---Challenge 2:Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://cdn2.thecatapi.com/images/MTg2NTExMw.jpg";
    div.appendChild(image);
}

//---Challenge 3: Rock,Paper,Scissor

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice =numberToChoice(randToRpsInt());
    
    console.log('Computer Choice',botChoice);
    results  = decideWinner(humanChoice,botChoice); // [0,1] human lost | bot won
    console.log(results);
    
    
    
    message = finalMessage(results); //{'message':'You won','color':'green'} 
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice , message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase =  {
        'rock' :{'scissors':1,'rock':0.5 ,'paper' :0},
        'paper' : {'rock':1 ,'paper':0.5,'scissor':0},
        'scissor' : {'paper':1 ,'scissor':0.5,'rock':0}
    };
    var yourScore =rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore === 0)
    {
        return{'message':'You lost !','color':'red'};
    }
    else if(yourScore === 0.5)
    {
        return{'message':'You tied !','color':'yellow'};
    } else
    {
        return{'message':'You won !','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice , finalMessage){
    var ImageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    // let's remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv  = document.createElement('div');
    var botDiv  = document.createElement('div');
    var messageDiv  = document.createElement('div');

    humanDiv.innerHTML="<img src ='" + ImageDatabase[humanImageChoice] + "'  height = 150 width =150 style='box-shadow:0px 10px 50px rgbs(37,50,233,1);' >"
    messageDiv.innerHTML="<h1 style='color:" +finalMessage['color'] + "; font-size: 60px; padding:30px;  '>" +finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src ='" + ImageDatabase[humanImageChoice] + "'  height = 150 width =150 style='box-shadow:0px 10px 50px rgbs(243,38,24,1);' >"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
   
}