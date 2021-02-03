$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();
   
    
    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();
//        console.log();
        if (scrollPos > 599) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
    
const burger =  document.querySelector('.burger');
burger.addEventListener('click', function() {
    const navMobile = document.querySelector('.nav--mobile');
    navMobile.classList.toggle('active');
    burger.classList.toggle('active');
    
    
    if (!(navMobile.classList.contains('active'))) {
        navMobile.style.boxShadow = "none";
    } else {
        navMobile.style.boxShadow = "0px 15px 40px 0px rgba(4,10,50,0.1)";
    }
    
    
})
    
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

new Swiper('.swiper-container', { 
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev'
//      },
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoHeight: true
});

//$(".fancybox").fancybox();
//    
//$('a.nav_link"]').fancybox();
//});
    
//Popup==============
    
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.add('popup-demo');
}
const popupLinks = document.getElementsByClassName("popup-demo");
console.log(popupLinks);

for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function(e) {
    e.preventDefault();
    Swal.fire({
        text: 'This is a demo version',
        padding: '50px 0px',
        width: '28rem',
        margin: '0px',
        confirmButtonText: 'Ok',
        buttonsStyling: false,
        icon: 'info',
        customClass: {
          confirmButton: 'btn btn_ok'
        }
          
})
}); 
}
});