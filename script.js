var istatus = document.querySelector("h4");

var addBtn = document.querySelector("#add");

var check = 0;

addBtn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addBtn.textContent = "Remove Friend";
        check = 1;   
    }
    else{
        istatus.innerHTML = "Strangers";
        istatus.style.color = "red";
        addBtn.textContent = "Add Friend";
        check = 0;
    }
});

