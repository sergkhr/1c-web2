let imgButtonsPodr = document.getElementsByClassName("contactImgPodr");
let imgButtonsSvern = document.getElementsByClassName("contactImgSvern");
let imgButtonConts = document.getElementsByClassName("contactImgCont");
let Cariers = document.getElementsByClassName("contactCarier");
let Texts = document.getElementsByClassName("kostil");
let contSpaces = document.getElementsByClassName("contSpace");
let contSpaceHeights = [];
let selected = [];
let cariersHeight = [];
let textsHeights = [];
let cariersBigHeights = [];

for (let i = 0; i < contSpaces.length; i++){
    contSpaceHeights.push(getComputedStyle(contSpaces[i]).height);
}

for(let i = 0; i < Texts.length; i++){
    textsHeights.push( Number(getComputedStyle(Texts[i]).height.replace("px", "")) + "px");
    Texts[i].classList.add("contactInfSvern");
    Texts[i].classList.remove("contactInfBig");
    setTimeout(function(){
        Texts[i].classList.remove("contactInv");
    },250);
    if( i == 2) {
        textsHeights[i] =  Number(textsHeights[i].replace("px","")) + 25 + "px";
    }
}

for(let i = 0; i < Cariers.length; i++){
    cariersHeight.push( Number(getComputedStyle(Cariers[i]).height.replace("px", "")) + "px");
    Cariers[i].style.height = cariersHeight[i];
    console.log(cariersHeight[i]);
    if(i == 2){
        cariersHeight[i] = Number(getComputedStyle(Cariers[i]).height.replace("px", "")) + 45 + "px";
        Cariers[i].style.height = cariersHeight[i];
    }
}

for (let i = 0; i < Cariers.length; i++){
    cariersBigHeights.push(Number(cariersHeight[i].replace("px", "")) + Number(textsHeights[i].replace("px", "")) + "px");
}

for (let i = 0; i < imgButtonsPodr.length; i++){
    selected.push(false);
}
for(let i = 0; i < imgButtonsPodr.length; i++){
    imgButtonsSvern[i].addEventListener("click", function(){
        //открытие блока
        if (!selected[i]){
            Cariers[i].style.height = cariersBigHeights[i];
            Texts[i].classList.remove("contactInfSvern");
            Texts[i].classList.add("contactInfBig");
            Texts[i].style.height = textsHeights[i];
            selected[i] = true;
            imgButtonsPodr[i].classList.add("contactImgSelecting");
            imgButtonsSvern[i].classList.add("contactImgSelecting");
            setTimeout(function(){
                imgButtonsSvern[i].classList.remove("contactInv");
                imgButtonsPodr[i].classList.add("contactInv");
                imgButtonsSvern[i].classList.remove("contactImgSelecting");
                imgButtonsPodr[i].classList.remove("contactImgSelecting");
                imgButtonsSvern[i].classList.remove("img-notSel-pos");
                imgButtonsPodr[i].classList.remove("img-notSel-pos");
                imgButtonsSvern[i].classList.add("img-sel-pos");
                imgButtonsSvern[i].classList.add("img-sel-pos");
            }, 250);
            
        } else { 
            //закрытие блока
            Cariers[i].style.height = cariersHeight[i];
            Texts[i].classList.add("contactInfSvern");
            Texts[i].classList.remove("contactInfBig");
            Texts[i].style.height = "0px";
            selected[i] = false;
            imgButtonsPodr[i].classList.add("contactImgSelecting");
            imgButtonsSvern[i].classList.add("contactImgSelecting");
            setTimeout(function(){
                imgButtonsPodr[i].classList.remove("contactInv");
                imgButtonsSvern[i].classList.add("contactInv");
                imgButtonsSvern[i].classList.remove("contactImgSelecting");
                imgButtonsPodr[i].classList.remove("contactImgSelecting");
                imgButtonsPodr[i].classList.remove("img-sel-pos");
                imgButtonsSvern[i].classList.remove("img-sel-pos");
                imgButtonsPodr[i].classList.add("img-notSel-pos");
                imgButtonsSvern[i].classList.add("img-notSel-pos");
            }, 250);
            
        }    
    });
}