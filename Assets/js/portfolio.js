const col = document.querySelectorAll('.collumn');
const contact = document.querySelector('.contact');
const theme = document.querySelector(".theme");

/*$('.section-1').fadeOut(3, function(){
    console.log("display-none")
})
$('.section-1').fadeIn(3000, function(){
    console.log("faded!")
})*/

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
    contact.classList.toggle("clicked");
    document.querySelector('.side-bar').classList.toggle('none');
    document.querySelector(".sections").classList.toggle("ml");

});
theme.addEventListener('click', function(){
    //Change the theme of the body
    document.querySelector("body").classList.toggle("changeTheme");
    document.querySelector(".btn").classList.toggle('changeTheme');
    document.querySelector(".theme").classList.toggle('changeTheme');
}); 
