console.log("Hello world!");

// window.alert("alert message popup!");

// ----------- Input --------------------
// let username = window.prompt("Whats your name?");
// console.log(username);


let userName;
document.getElementById("myButton").onclick =  function(){
    userName = document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("myLabel").innerHTML = "hello" + " " + userName;
}