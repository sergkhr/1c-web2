let button = document.getElementById("button");
let textarea = document.getElementById("sandbox");
button.addEventListener("click", function(){
    let dictionary = {};
    let maxWords = new Set();
    let max = -1;
    let mostWords = "";
    let text = textarea.value;
    text = text.toLowerCase();
    console.log(text);
    text = text.replace(/[^\w\s]|_/g,"");
    text = text.replace(/\s+/g, " ");
    console.log(text);
    text = text.trim();
    console.log(text);
    let words = [];
    words = text.split(" ");
    console.log(words);
    words.forEach(function(word){
        if(!(word in dictionary)){
            dictionary[word] = 0;
        }
        dictionary[word] += 1;
        if(dictionary[word] > max){
            max = dictionary[word];
        }
    });
    words.forEach(function(x){
        if(dictionary[x] === max){
            maxWords.add(x);
        }
    });
    maxWords.forEach(function(x){
        mostWords = mostWords + " " + x;
    });
    alert(mostWords);
});