$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true
            }
        }
    })
});
$('.navbar-toggler').click(function() {
        $('.sidebar').toggleClass('active');
})
