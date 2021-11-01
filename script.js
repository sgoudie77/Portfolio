// Sticky Navbar
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Menu Toggle for Responsive Design
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    const title = document.querySelector('.hero-title');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    title.classList.toggle('active');
}

// Portfolio Filter
let list = document.querySelectorAll('.list');
let projectBox = document.querySelectorAll('.project-box');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < projectBox.length; k++){
            projectBox[k].classList.remove('active');
            projectBox[k].classList.add('hide');

            if(projectBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                projectBox[k].classList.remove('hide');
                projectBox[k].classList.add('active');
            }
        }

    })
}

// Smooth Scolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);
    return false;
});