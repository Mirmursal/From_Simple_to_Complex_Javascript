
newFunction();
let currentColor = "gray";
function newFunction() {
    var count = Number(prompt("Siz ne qeder <div> yaratmaq isteyirsiniz?", "1"));
    for (var i = 0; i < count; i++) {
        var myDiv = document.createElement("div");
        myDiv.className = "main";
        var h1 = document.createElement('h1');
        h1.innerText = (i + 1) + ". Div";
        h1.className = "inner";
        myDiv.appendChild(h1);
        document.body.appendChild(myDiv);
    }
}

document.querySelector('#Azalt').addEventListener("click",function(){
  let choosen=document.querySelectorAll(".main");
  let lastChoosen=choosen[choosen.length-1];
  lastChoosen.remove();
})

document.querySelector("#Artir").addEventListener("click",function(){

    var newDiv=document.createElement('div');
    newDiv.className="main";
    newDiv.style.backgroundColor = currentColor;
    var h1=document.createElement("h1");
    h1.className="inner";

    var helper=document.querySelectorAll(".main");
    let count=helper.length+1;
    h1.innerText=count+". Div";
    newDiv.appendChild(h1);
    document.body.appendChild(newDiv);

})
document.querySelector(".red").addEventListener("click",function(){
  let red=document.querySelectorAll(".main");
  for(let i=0;i<red.length;i++){
      currentColor = "red";
      red[i].style.backgroundColor = currentColor;
  }
})

document.querySelector(".yellow").addEventListener("click",function(){
    let red=document.querySelectorAll(".main");
    for(let i=0;i<red.length;i++){
        currentColor = "yellow";
        red[i].style.backgroundColor = currentColor;
    }
  })

  document.querySelector(".green").addEventListener("click",function(){
    let red=document.querySelectorAll(".main");
    for(let i=0;i<red.length;i++){
        currentColor = "green";
        red[i].style.backgroundColor = currentColor;
    }
  })

  document.querySelector(".purple").addEventListener("click",function(){
    let red=document.querySelectorAll(".main");
    for(let i=0;i<red.length;i++){
        currentColor = "purple";
        red[i].style.backgroundColor = currentColor;
    }
  })

  document.querySelector(".blue").addEventListener("click",function(){
    let red=document.querySelectorAll(".main");
    for(let i=0;i<red.length;i++){
        currentColor = "blue";
        red[i].style.backgroundColor = currentColor;
    }
  })

  document.querySelector(".orange").addEventListener("click",function(){
    let red=document.querySelectorAll(".main");
    for(let i=0;i<red.length;i++){
        currentColor = "orange";
        red[i].style.backgroundColor = currentColor;
    }
  })
  let count=0;
  var changeColor=document.getElementById('changeColor');
       changeColor.addEventListener("click",function(){
       
       count++;
       var wrapper= document.getElementById('wrapColor');
       if(count%2==0){ 
        wrapper.style.display="none";
       }
       else{
        wrapper.style.display="block";
       }
  })


