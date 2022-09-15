

window.onload = function(){
    $("#back-button").click(function(){
        var timer = setTimeout(function (){
        console.log("work!");
        window.location.href="useraccount.html";
    }, 500)
    })

}


