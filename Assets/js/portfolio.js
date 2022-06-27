const col = document.querySelectorAll('.collumn');
const contact = document.querySelector('.contact');
const theme = document.querySelector(".theme");
var slide = document.querySelector(".section-1");



for(var i = 0; i < col.length; i++){
    col[i].addEventListener('mouseover',function(){
        this.classList.add("success");
    });
};
for(var i = 0; i < col.length; i++){
    col[i].addEventListener('mouseout',function(){
        this.classList.remove("success");
    })
}
contact.addEventListener('click', function(){
    document.querySelector('.side-bar').classList.toggle('none');
    document.querySelector(".sections").classList.toggle("ml");

});
theme.addEventListener('click', function(){
    document.querySelector("body").classList.toggle("changeTheme");
    document.querySelector(".btn").classList.toggle('changeTheme');
    document.querySelector(".theme").classList.toggle('changeTheme');
}); 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}