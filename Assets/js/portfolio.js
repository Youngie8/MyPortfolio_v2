const col = document.querySelectorAll('.collumn');
const contact = document.querySelector('.contact');
const theme = document.querySelector(".theme");
const navbarBrand = document.querySelector('.navbar-brand');


for (let i = 0; i < col.length; i++) {
    col[i].addEventListener('mouseover', function () {
        this.classList.add("success");
    });
};

for (let i = 0; i < col.length; i++) {
    col[i].addEventListener('mouseout', function () {
        this.classList.remove("success");
    });
}

contact.addEventListener('click', function () {
    contact.classList.toggle("clicked");
    document.querySelector('.side-bar').classList.toggle('none');
    document.querySelector(".sections").classList.toggle("ml");

});

navbarBrand.addEventListener("mouseover", function () {
    // add the star-filled
    document.querySelector(".text-warning").classList.remove('bi-star');
    document.querySelector(".text-warning").classList.add('bi-star-fill');
});

navbarBrand.addEventListener("mouseout", function () {
    // remove the star-filled
    document.querySelector(".text-warning").classList.remove('bi-star-fill');
    document.querySelector(".text-warning").classList.add('bi-star');
});

theme.addEventListener('click', function () {
    //Change the theme of the body
    document.querySelector("body").classList.toggle("changeTheme");
    document.querySelector(".btn").classList.toggle('changeTheme');
    document.querySelector(".theme").classList.toggle('changeTheme');
}); 
