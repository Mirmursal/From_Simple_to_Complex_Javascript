
newFunction();

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
    
    var h1=document.createElement("h1");
    h1.className="inner";

    var helper=document.querySelectorAll(".main");
    let count=helper.length+1;
    h1.innerText=count+". Div";
    newDiv.appendChild(h1);
    document.body.appendChild(newDiv);

})
