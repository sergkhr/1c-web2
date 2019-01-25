
function areArraysEqual(a, b){
    let equal = true;
    if( Array.isArray(a) && Array.isArray(b)){
        if(a.length === b.length){
            a.forEach(function(x, index){
                if(x !== b[index]){
                    equal = false;
                }
            });
        }else{
            equal = false;
        }
        return equal;
    }else{
        console.log("insert arrays... ... ... please.");
    }
    
}