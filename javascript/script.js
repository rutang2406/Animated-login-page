let change = document.getElementById("change");
let container = document.getElementById("toggle-container");
let heading=document.getElementById("heading");
let paragraph=document.getElementById("paragraph")
let transformed=true;
change.onclick =function() {
    if(transformed){
    container.style.transform = "translateX(-88%)";
    change.innerHTML="SIGN IN";
    heading.innerHTML="Welcome Back!"
    heading.style.marginTop="120px";
    paragraph.innerHTML="Enter your personal to use this site"
    paragraph.style.marginLeft="50px";
    change.style.marginLeft="120px"
    transformed=false;
    }
    else{
        container.style.transform = "translateX(-184.5%)";
    change.innerHTML="SIGN UP";
    heading.innerHTML="Hello, Friend!"
    heading.style.marginTop="25%";
    paragraph.innerHTML="Register with your personal details to use all site features"
    paragraph.style.marginLeft="20px";
    change.style.marginLeft="100px";
    transformed=true;
    }
};
