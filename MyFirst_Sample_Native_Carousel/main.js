let arr=["1","2","3","4","5"];
let x=1;


function right()
{
    if(x==5){
        x==1;
    }
    else{
      x++;
    }
    document.getElementById("main").style.backgroundImage = 'url(images/' + x + '.jpg)';
}

function left()
{
    if(x==1){
        x==5;
    }
    else{
      x--;
    }
    document.getElementById("main").style.backgroundImage = 'url(images/' + x + '.jpg)';
}



