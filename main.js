var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//=====手動 切換幻燈片
    //當點下 圓點時 會內碼中加上"active"
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
    //依循 圓點順序 找出對應 圖片
btns.forEach((btn,i) => {
    btn.addEventListener("click",() =>{
        manualNav(i);
        currentSlide = i;
    });
});

//=====自動 切換幻燈片
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            })

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i>= slides.length){
                return;
            }
            repeater();
        },10000);
    }
    repeater();
 }
 repeat();