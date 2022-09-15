$(function(){
    // this code is taken from http://sagarmore.in/examples.html
    var countryOptions;
    $.getJSON('autocomplete.json',function(result){
        $.each(result, function(i,country) {
            //<option value='countrycode'>contryname</option>
            countryOptions+="<option value='"
                    +country.code+
                    "'>"
                    +country.name+
                    "</option>";
        });

        $('#state').html(countryOptions);
    });
});