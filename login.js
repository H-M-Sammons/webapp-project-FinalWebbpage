/*
I know this is not how you are really supposed to
save passowrds and stuff... I just don't have a database
 */
var userNames = ["Admin", "Username", "Tom"];
var passwords = ["admin", "Password", "123456"];
var adminAccount = ["Admin"];
var userAccount = ["Username", "Tom"];


/*
setting up all of the variables required for the sight
 */
var hold="";
var holdPass="";
var i = 0;
var j=0;
var k = 0;
/*
I pulled this from one of the other projects
 */
var $ = function (id) { return document.getElementById(id); };

window.onload = function(){
    $("submit").onclick = login;
    $("notAUser").onclick = goToContact;
}
// This code itterates through the two arrays to see if the user inputted data maches up
function login(){
    /*this is a comparison algorithum that looks to see
    if there is a maching username
     */
for(i=0; i<userNames.length; i++) {
    //this has the variable holed the user input
    hold = $("UserName").value;
    holdPass = $("pwd").value;

    if (userNames[i].length == hold.length) {
        console.log("user length");
        if (passwords[i].length == holdPass.length) {
            console.log("pass lenght");
        if (userNames[i] === hold) {
            console.log("user == hold");
            if (passwords[i] === holdPass) {
                console.log("password == holdpass");
                k= i+1;
                j=2;
                //this is a truth variable that tells the computer what to do if there is a match
                if(adminAccount[i]===hold){
                    j=1;
                }

            }
        }
    }
}
}
if(j==1){
    window.location.href = 'adminPage.html'
    /*
    this need to log you in
     */
    console.log("This should work");
    //alert("The login was successful I just have not set the portal up yet");
}
else if(j==2){
    window.location.href ='useraccount.html'
}
else{
    console.log("This did not work");
   alert("Your password and or username did not work");
}

}
//This is the button under the login for if you don't have an account+
function goToContact(){
    /*
    this should take you to the contact page
     */
    window.location.href = 'contact.html';
}