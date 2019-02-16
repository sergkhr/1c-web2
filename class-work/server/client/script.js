let citats = [];
let block = document.getElementById("block");

function makeRequest () {
    let request = $.get("http://localhost:591/quote");
    request.done(function(data){
       data = JSON.parse(data);
       document.title = "number: " + JSON.stringify(data.number);
       block.innerHTML = data.text;
    });
    request.fail(function(jqXHR, textStatus, errorThrown){
        console.log(textStatus, errorThrown);
    });
};
makeRequest();

