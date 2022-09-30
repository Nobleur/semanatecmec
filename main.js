// Execute script after page load

window.onload = function digital_fn(){

    //Toggle Button 

    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
       // console.log(toggle)
    });

    //Masonry JS

    let grid = document.querySelector("#site-main .recent-work-area .images-flex")

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fitWidth: true
    })

}

// Rellax JS Code

var rellax = new Rellax('.rellax',{
    center: true
})

// Menu

var menu = document.querySelector('.navbar ul');
var menuIcone = document.querySelector('.menu-icone');

function abrirMenu(){
    menu.classList.toggle('open');
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const menuBtn = document.querySelector(".menu-btn");
        const navigation= document.querySelector(".navigation");

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });

        // Slide

        const btns = document.querySelectorAll(".nav-btn");
        const slides = document.querySelectorAll(".image-slide");


        var sliderNav = function(manual){
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });

            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
                
            btns[manual].classList.add("active");
            slides[manual].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                sliderNav(i);
            });
        });

        let valueDisplays = document.querySelectorAll(".num");
        let interval = 4000;

        valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
            clearInterval(counter);
            }
        }, duration);
        }); 

// Slide - Programação

var index = 0;
var i = 0;
var slider = document.getElementsByClassName("slider");
var line = document.getElementsByClassName("line");

auto();

function show(n){
  for(i=0; i<slider.length; i++){
    slider[i].style.display="none";
  }

  for(i=0; i<line.length; i++){
    line[i].className=line[i].className.replace("active");
  }

  slider[n-1].style.display=("block");
  line[n-1].className += " active"
}

function auto(){
  index++;
  if(index>slider.length){
    index=1
  }

  show(index);
  setTimeout(auto, 5000);
}

function plusSlide(n){
  index+=n;
  if(index > slider.length){
    index = 1;
  }

  if(index < 1){
    index=slider.length;
  }

  show(index);
}

function currentSldie(n){
  index=n;
  show(index);
}
