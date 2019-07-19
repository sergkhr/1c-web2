let imgButtonsPodr = document.getElementsByClassName("contactImgPodr");
let imgButtonsSvern = document.getElementsByClassName("contactImgSvern");
let imgButtonConts = document.getElementsByClassName("contactImgCont");
let Cariers = document.getElementsByClassName("contactCarier");
let selected = [];
for (let i = 0; i < imgButtonsPodr.length; i++){
    selected.push(false);
}
for(let i = 0; i < imgButtonsPodr.length; i++){
    imgButtonsSvern[i].addEventListener("click", function(){
        //открытие блока
        if (!selected[i]){
            Cariers[i].classList.add("contactSelected");
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
            }, 500);
            
        } else { 
            //закрытие блока
            Cariers[i].classList.remove("contactSelected");
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
            }, 500);
            
        }    
    });
}