
function register(){
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registered successfully");
    window.location = "index.html";
}

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass){
        window.location = "home.html";
    }else{
        alert("Invalid login");
    }
}

const activities = [
{
 id:1,
 activity:"Write tables 12 to 19",
 subject:"Maths"
},
{
 id:2,
 activity:"Science project model",
 subject:"Science"
},
{
 id:3,
 activity:"Essay writing",
 subject:"English"
},
{
 id:4,
 activity:"Simple Indian History",
 subject:"Social"
},
{
 id:5,
 activity:"Read Text Books",
 subject:"First Language"
}
];

function showActivities(){

 let selected = document.getElementById("subject").value;
 let result = document.getElementById("result");
 result.innerHTML="";

 activities.forEach(a=>{
     if(a.subject === selected){
         result.innerHTML += `<li>${a.activity}</li>`;
     }
 });

}

