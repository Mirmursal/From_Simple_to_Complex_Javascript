

var arr=[12,34,22,55,66,12];

var arr2=[1,33,45,678,99,33,45,900];

var arr3=[22,43,65,66,7,5423,4,44];


function findMax(param){
    let max=param[0];
    for(i=0;i<param.length;i++){
            if(param[i]>max){
                max=param[i];
            }
    }
    document.write(max);
}

function findMin(param){
    let min=param[0];
    for(i=0;i<param.length;i++){
            if(param[i]<min){
                min=param[i];
            }
    }
    document.write(min);
}
        findMax(arr2);