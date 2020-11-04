var enteredUname = document.getElementById("userName");
// var signInUName = document.getElementById("inputName");
var inputNamelbl = document.getElementById("inputNamelbl");

// use of local storage
function signUp() {
    // e.preventDefault();
    if (typeof(Storage) !== "undefined") {
    localStorage.setItem('setUname', enteredUname.value);
    console.log(localStorage.getItem('setUname'));
    inputNamelbl.innerHTML = localStorage.getItem('setUname');
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}

function signIn() {
    
}