let reqem=Number(prompt("her hansi bir reqem daxil edin "));
if(reqem<1)
{
    document.write("Duzgun reqem daxil edin");
}
else{
    // 1)İstifadəçinin daxil etdiyi rəqəmin vurma cədvəli console-da görsənsin.
    document.write("Daxil etdiyiniz "+reqem+" reqeminin vurma cedveli beledir <br>");
    for(i=1;i<11;i++){
       document.write(reqem+" * "+i+" = "+reqem*i+"<br>");
  }

// 2)İstifadəçinin daxil etdiyi rəqəmə qədər olan bütün ədədlərin hasili hesablansın.
    document.write("Daxil etdiyiniz "+reqem+" reqemine qeder olan butun ededlerin hasili beledir <br>");
    let factor=1;
    for(i=2;i<=reqem;i++){   
        document.write(factor+" * "+i+" = "+i*factor+"<br>");
        factor*=i;   
  }
// 3)İstifadəçinin daxil etdiyi rəqəmə qədər olan yalnız tək ədədlər console-da görsənsin və onların sonda cəmi qayıtsın.
   document.write("Daxil etdiyiniz "+reqem+" reqemine qeder olan yalniz tek ededler beledir <br>");
   for(i=1;i<=reqem;i++){
       if(i%2!=0){
           document.write(i+"<br>");
       }
   }
   let sum=0;
   for(i=1;i<=reqem;i++){
    if(i%2!=0){
        sum+=i;
    }   
}  
   document.write("Tek ededlerin cemi ise "+sum+ " a beraberdir");
}

