let button = document.getElementById("button");
button.addEventListener("click", function(){
    let request = $.get("http://localhost:591/", {text: $("#req").val()} );
    request.done(function(data){
        console.log(data);
    });
    request.fail(function(jqXHR, textStatus, errorThrown){
        console.log(textStatus, errorThrown);
    });
});