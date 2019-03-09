console.log("getUniqueItemsNumber");
function getUniqueItemsNumber(array){
    let unique = new Set();
    array.forEach(function(x){
        if(!unique.has(x)){
            unique.add(x);
        }
    });
    return unique.size;
}