
let num=Math.round(Math.random()*99);
console.log(num);
let counter=4;
let specCounter=1;
function checker(){
        let reqem=document.getElementById("number").value;
        document.getElementById("number").value="";
        
        if(reqem<1 || reqem>100){
            document.getElementById("information").innerHTML="Daxil edeceyiniz reqem 1 ve 100 araliqinda olmalidir";
        }
        else if(reqem==num){
            document.getElementById("information").innerHTML="Tebrikler!!! Siz teleb olunan reqemi "+specCounter+" cehdde tapdiniz<br> Teleb olunan reqem ise "+num+" idi";      
        }
        else if(counter==0)
          {
            document.getElementById("information").innerHTML="Teessuf ki, siz meglub oldunuz!!!"
          }
        else if(reqem>num){
            document.getElementById("information").innerHTML="Bextinizi bir daha sinayin... Daxil etdiyiniz reqem nezerde tutulan reqemden boyukdur<br>Sizin "+counter+" cehdiniz qaldi";  
        }
         else if(reqem<num){
            document.getElementById("information").innerHTML="Bextinizi bir daha sinayin... Daxil etdiyiniz reqem nezerde tutulan reqemden kicikdir<br>Sizin  "+counter+" cehdiniz qaldi";  
        }
        counter--;
        specCounter++;
}