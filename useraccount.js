$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "products.xml",
        beforeSend: function() {
            $("#Products").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "xml",
        success: function(data) {
            $("#Products").html("");
            $(data).find("management").children().each(function() {
                var xmlDoc = $(this);
                $("#Products").append
                ("<h3>" + xmlDoc.find("name").text() + "</h3>" + "<p>" +
                        xmlDoc.find("bio").text() + "</p>" +"<br>");
            });
        }
    });
});