$(document).ready(function(){
  // chang display navbar
  $(window).scroll( function() {
    if ($('html,body').scrollTop() >= 30) {
      $('header .navbar').removeClass('position-absolute animate_out');
      $('header .navbar').addClass('position-fixed animate_in');
    } else {
      $('header .navbar').addClass('position-absolute animate_out');
      $('header .navbar').removeClass('position-fixed animate_in');
    }
  });

  $('header nav button.navbar-toggler').on('click', function () {
    $('.navbar').toggleClass('active');
  });
  
  // start scrollspy

  $(document).ready(function(){

    var sectionIds = $('header .navbar li.nav-item a');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).parent().addClass('active');
              } else{
                  $(this).parent().removeClass('active');
              }
          });
      });
  });


  // end scrollspy


  // start navbar header active
  $('header').on('click','.nav-link', function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  // end navbar header active
  // start nav portfolio active
  $('.portfolio-menu').on('click','li', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
  // end nav portfolio active

  // start slider 
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    lazyload:true,
    margin:0,
    nav: false,
    dots:true,
    responsiveClass:true,
    center:false,
    smartSpeed:1500,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  // end slider 

  // start portfolio 
  var $grid =  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });
  $('ul li').on('click', function() {
    var value = $(this).attr('data-filter');
    $grid.isotope({
    filter: value
    });
  });
  // end portfolio 

  // start skills 
  var waypoint = new Waypoint({
    element: document.getElementById('Features'),
    handler: function(direction) {

      if( direction === 'down') {
        $('.skill .progress').each(function () {
          var grade_width = $(this).children('.grade').text();
          $(this).children('.progress-bar').animate({
            width: grade_width,
          },2000);
        })
      } else {
        $('.skill .progress').each(function () {
          $(this).children('.progress-bar').animate({
            width: 0,
          },1000);
        })
      }
    },
    offset: '20%'
  });
  // end skills 



  
});