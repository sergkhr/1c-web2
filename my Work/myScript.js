let imgButtons = document.getElementsByClassName("contactImg");
let imgButtonConts = document.getElementsByClassName("contactImgCont");
let Cariers = document.getElementsByClassName("contactCarier");
let selected = [];
for (let i = 0; i < imgButtons.length; i++){
    selected.push(false);
}
for(let i = 0; i < imgButtons.length; i++){
    imgButtons[i].addEventListener("click", function(){
        //открытие блока
        if (!selected[i]){
            Cariers[i].classList.add("contactSelected");
            selected[i] = true;
            imgButtons[i].classList.add("contactImgSelecting");
            // if(i % 2 == 0){
            //     imgButtons[i].src = "str_svern_nadp_grey.png";
            // } else {
            //     imgButtons[i].src = "str_svern_nadp_black.png";
            // }
            setTimeout(function(){
                if(i % 2 == 0){
                    imgButtons[i].src = "str_svern_nadp_grey.png"; //по-хорошему эта строчка должна быть тут, однако в этом случаем картинка меняется только после конца операции по открытию блока (возможно картинка не успевает подгрузится), поэтому строчка скопирована выше (да, костыль).
                } else {
                    imgButtons[i].src = "str_svern_nadp_black.png"; //то же что и сверху написано
                }
                imgButtons[i].classList.remove("contactImgSelecting");
                imgButtons[i].classList.remove("img-notSel-pos");
                imgButtons[i].classList.add("img-sel-pos");
            }, 500);
            
        } else { 
            //закрытие блока
            Cariers[i].classList.remove("contactSelected");
            selected[i] = false;
            imgButtons[i].classList.add("contactImgSelecting");
            setTimeout(function(){
                if(i % 2 == 0){
                   imgButtons[i].src = "str_podr_nadp_grey.png";
                } else {
                   imgButtons[i].src = "str_podr_nadp_black.png";   
                }
                imgButtons[i].classList.remove("contactImgSelecting");
                imgButtons[i].classList.remove("img-sel-pos");
                imgButtons[i].classList.add("img-notSel-pos");
            }, 500);
            
        }    
    });
}