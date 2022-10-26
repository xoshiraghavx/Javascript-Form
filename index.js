let id = (id) => document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes)

let username = id("username"), 
email = id("email"), 
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
engine(username,"Username cannot be blank", 0);
engine(email,"Email cannot be blank", 1);
engine(password,"Password cannot be blank", 2);

}); 

let engine = (id, message, serial) => {
    if (id.value.trim()=== "") {
        errorMsg[serial].innerHTML = message
        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
        
    }
    else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        failureIcon[serial].style.opacity = "0";
    }
};
