$(document).ready(function() {
	
	// Expand Panel
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});		
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});		
		
});


function store(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername= theForm["usernamet"];
    var inputPassword= theForm["passwordt"];
    localStorage.setItem("usernamet", inputUsername.value);
    localStorage.setItem("passwordt", inputPassword.value);
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('usernamet') + "!";
    return false;
} 

function login(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["usernamet"];
    var inputPassword = theForm["passwordt"];
    var username = inputUsername.value;
    var password = inputPassword.value;
    if ((username == localStorage.getItem('usernamet')) && (password == localStorage.getItem('passwordt'))) {
     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('usernamet') + "!";
      } else {
     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
    }
    return false;
}