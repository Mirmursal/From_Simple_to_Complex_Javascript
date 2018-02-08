let email = document.querySelector('#email');
let password = document.querySelector('#password');
let saveBtn = document.querySelector("#save");
let information = document.querySelector(".information"); 

let emailArr = [];
let passwordArr = [];

email.addEventListener("blur",function(){
    if(email.value.includes("@")){
        email.style.borderColor = "green";
        information.innerHTML = "";
        information.style.display = "none";
    }
    else{
        email.style.borderColor = "red";
        information.classList.add('error');
        information.innerHTML = "Duzgun email formati daxil edin!";
        information.style.display = "block";
    }
})
password.addEventListener("keyup",function(){
    if(password.value.length < 8)
    {
        information.innerHTML = "Sifreniz minimum 8 simvoolu olmalidir";
        information.classList.add('error');
        information.style.display = "block";
    }
    else{
        information.innerHTML = "";
        information.style.display = "none";

    }
})

saveBtn.addEventListener("click",function(){
    if(email.value.includes("@") && password.value.length > 8){
        if(emailArr.indexOf(email.value) ==-1){
            information.innerHTML = "Ugurla qeydiyyatdan kecdiniz";
            information.style.display = "block";
                information.classList.add("success");
                information.classList.remove("error");
                console.log(emailArr);
                emailArr.push(email.value);
        }
        else{
                information.innerHTML = "Siz artiq qeydiyyatdan kecmisiniz.Yeniden eyni emaille qeydiyyat mumkun deyil";
                information.classList.add("error");
                information.classList.remove("success");
                information.style.display = "block";

        }
        email.value = "";
        password.value = ""; 
    }     
    
})