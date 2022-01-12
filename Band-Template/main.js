var i = 0;
changePic();
setInterval(changePic,3000);

navBurger = document.querySelector(".navbar-burger")
navMenu = document.querySelector(".navbar-menu");
navBurger.addEventListener('click',() => {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
});




function changePic() {
    picDivs = document.querySelectorAll('.the-home-pic');
    for(var j =0 ;j  < 3 ; j++){
        picDivs[j].style.display = 'none';
    }
    picDivs[i].style.display = "";
    i++;
    i = i%3;
}



