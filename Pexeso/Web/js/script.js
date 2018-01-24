var player=1;
var field=  [ [1,1,2,2], [3,3,4,4], [5,5,6,6], [7,7,8,8]];
var turn1=-1;
var turn2=-1;
var score1=0;    
var score2=0;
var turnGuessed;
//console.log(field);
shuffle()

function shuffle()
{
    var i, temp;
    for(i=0;i<10;i++)
        {
            var x1=Math.floor(Math.random()*4);
            var x2=Math.floor(Math.random()*4);
            var y1=Math.floor(Math.random()*4);
            var y2=Math.floor(Math.random()*4);
            temp=field[x1][y1];
            field[x1][y1]=field[x2][y2];
            field[x2][y2]=temp;
        }
  console.log("Shuffle finished");
  
    
}

function clickImg(value)
{
if(turn2!=-1)
        return;
    var row=Math.floor(value/10);
    var col=value%10;
    
    if(field[row][col]==0)
        return;
    
    console.log("You clicked: row: "+row+" col: "+col);
    if(turn1==row*10+col)
        return;
    
    if(field[row][col]>0){  
        var source="Img/img"+field[row][col]+".png";
        var imageId="img"+row+col;
        document.getElementById(imageId).src=source;   
	}
    
if(turn1==-1)
    {
     turn1=row*10+col;   
    }
    
else
    {
    turn2=row*10+col;
    checkCard();
    }
    
}

function checkCard()
{
    var row1=Math.floor(turn1/10);
    var col1=turn1%10;
    var row2=Math.floor(turn2/10);
    var col2=turn2%10;
    
    if(field[row1][col1]==field[row2][col2])
    {
        if(player==1) {
            score1++;
        }
        else {
            score2++;
        }
        turnGuessed=turn1;
        setTimeout(moveCard,1000);
        updateScore();
    }
    else {
       
        setTimeout(turnBack,1000);
        player=player==1?2:1; 
}
}
function turnBack()
{
    
    var row1=Math.floor(turn1/10);
    var col1=turn1%10;
    var row2=Math.floor(turn2/10);
    var col2=turn2%10;
    var imageid="img"+row1+col1;
document.getElementById(imageid).src="Img/back.jpg";
    var imageid="img"+row2+col2;
document.getElementById(imageid).src="Img/back.jpg";
    turn1=-1;
    turn2=-1;
}
function moveCard() 
{
    var table;
    if(player==1){
        table=document.getElementById('tableP1');
    }
    else {
        table=document.getElementById('tableP2');
    }
    
    var row1=Math.floor(turn1/10);
    var col1=turn1%10;
    var row2=Math.floor(turn2/10);
    var col2=turn2%10;
    var imageSource="Img/img"+field[row1][col1]+".png";
    
    var imageId="img"+row1+col1;
    document.getElementById(imageId).src="Img/done.jpg";
    
    var imageId="img"+row2+col2;
    document.getElementById(imageId).src="Img/done.jpg";
    var row = table.insertRow(0);
    
       
    field[row1][col1]=0;
    field[row2][col2]=0;
    
    turn1=-1;
    turn2=-1;
}
    
function updateScore() 
{
    if(player==1) {
        document.getElementById('score1').innerHTML="Score : "+score1;
    }
    else{
       document.getElementById('score2').innerHTML="Score : "+score2;
}
}
