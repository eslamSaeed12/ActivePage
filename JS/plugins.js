

/*  testimonials */ 

function Slider(){

        var sliderControl = document.getElementsByClassName("slider-control"),
        sliderControlItem = sliderControl[0].getElementsByTagName("li"),
        slider = document.getElementsByClassName("testi-item");
        var i = 0;
        for (i; i<= sliderControlItem.length; i++){}
        sliderControlItem[0].onclick = function(){
            slider[0].classList.add("active");
            slider[1].classList.remove("active");
            slider[2].classList.remove("active");
            slider[3].classList.remove("active");
            
        };
        sliderControlItem[1].onclick = function(){
            slider[0].classList.remove("active");
            slider[1].classList.add("active");
            slider[2].classList.remove("active");
            slider[3].classList.remove("active");
        };
        sliderControlItem[2].onclick = function(){
            slider[0].classList.remove("active");
            slider[1].classList.remove("active");
            slider[2].classList.add("active");
            slider[3].classList.remove("active");
        };
        sliderControlItem[3].onclick = function(){
            slider[0].classList.remove("active");
            slider[1].classList.remove("active");
            slider[2].classList.remove("active");
            slider[3].classList.add("active");
        };
}

Slider();