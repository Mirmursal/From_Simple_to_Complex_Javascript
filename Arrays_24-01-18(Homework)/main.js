let arr=[12,2,10,18,23,45,7,67];
let arr1=[1,2,5,3,9,7];
let arr2=[12,31,69,12,34,78];
let arr3=[2,3,5,4];
// --------------------------------------------------------------------------------------------------------------------
// Verilən array-dəki rəqəmlərin hasilini tapan funksiya yazın.
document.write("TAPSIRIQ 1<br>");
function findExtracted(param){
    let extracted=1;
    for(i=0;i<param.length;i++)
    {
       extracted*=param[i];
    }
    document.write("Daxil etdiyiniz Array-in reqemleri hasili "+extracted+"-e beraberdir <br>");
}
findExtracted(arr3);
// -------------------------------------------------------------------------------------------------------------------
// Verilən array-dəki rəqəmlərin kvadratlarının cəmini tapan funksiya yazın.
document.write("TAPSIRIQ 2<br>");
function findSquareSum(param){
    let sum=0;
    for(i=0;i<param.length;i++)
    {
       sum+=param[i]*param[i];
    }
    document.write("Daxil etdiyiniz Array-in reqemlerinin kvadratlari cemi "+sum+"-e beraberdir<br>");
}
findSquareSum(arr3);
// -------------------------------------------------------------------------------------------------------------------
// Verilən array-dəki cüt rəqəmlərin cəmini tapan funksiya yazın.
document.write("TAPSIRIQ 3<br>");
function findDoubleSum(param){
    let sum=0;
    for(i=0;i<param.length;i++)
    {
       if(param[i]%2==0)
       {
          sum+=param[i];
       }
    }
    document.write("Daxil etdiyiniz Array-in cut reqemlerinin cemi "+sum+"-e beraberdir<br>");
}
findDoubleSum(arr2);
// -------------------------------------------------------------------------------------------------------------------
// Verilən sözdəki hər bir hərfin case-ni dəyişən funkisya yazın. Məsələn, söz "Salam Elmir" olarsa, cavab "sALAM eLMİR" olmalıdır.
document.write("TAPSIRIQ 4<br>");
let word="SaLaM olsUn BakidAN TEBRIZE";
function changeCase(param){
    for(i=0;i<param.length;i++)
    {
        if(param.charAt(i)==param.charAt(i).toUpperCase()){
            document.write(param.charAt(i).toLowerCase());
        }
        else
        {
            document.write(param.charAt(i).toUpperCase());
        }
    }
}
changeCase(word);
// ----------------------------------------------------ELAVELER-----------------------------------------------------
document.write("TAPSIRIQ 5 ELAVE<br>");
document.write("<br>");
let myArr=[12,23,71,12,12,71,72];
function replacingElements(param)
{
    let helperArr=param;
    for(i=0;i<param.length;i++)
  {
    let count=0;
    for(j=0;j<helperArr.length;j++)
    {
        if(param[i]==helperArr[j])
        {
            count++;
        }       
    }
    document.write("Daxil edilen array da "+helperArr[i]+" elementinden "+count+" dene var<br>");  
  }
}
replacingElements(myArr);
// Verilən array-dəki rəqəmlərin neçə dəfə təkrarlandığını göstərən funksiya yazın.


// function replacingElements(param)
// {
//     for(i=0;i<param.length;i++)
//     {
//         let m=param[i];
//         param.slice(i,1);      
//         let count=0;
//         for(j=0;j<param.length;j++)
//         {
            
//             if(m==param[j])
//             {
//               count++;
//             }   
//         }
//         document.write("Daxil edilen array da "+ param[i]+" elementinden "+count+" dene var<br>");
//     }
// }
// replacingElements();


// ----------------------------------------------------------------------------------------------
// Verilən array-dəki rəqəmlər arasında ən çox təkrarlanan rəqəmi göstərən funksiya yazın.
document.write("TAPSIRIQ 6 ELAVE<br>");

let newArr=[12,23,71,12,12,71,72];
function bestReplacingElements(param)
{
    let max=0;
    let bestReplacing;
    let helperArr=param;
    for(i=0;i<param.length;i++)
  {
    let count=0;
    for(j=0;j<helperArr.length;j++)
    {
        if(param[i]==helperArr[j])
        {
            count++;
           if(count>max)
           {
               max=count;
               bestReplacing=helperArr[i];
           }
        }         
    }
  }
  document.write("Verilen arrayda en cox " + bestReplacing+ " reqemi "+max+" defe tekrarlanib<br>"); 
}
bestReplacingElements(newArr);











