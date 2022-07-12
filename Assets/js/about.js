const section = document.querySelector('section')
const body = document.querySelector("body");
section.addEventListener("click", function(){
    body.classList.toggle("changeTheme");
});