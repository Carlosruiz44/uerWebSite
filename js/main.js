// Section Scroll

var lastId,
 topMenu = $("#mainNav"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });


// Mobile Menu Slide

$('.material-icons').click(function(){
  const listItems = $('#mainNav').slideToggle();
});

$('#market').click(function(){
  const subList = $('#subMenu').slideToggle();
});


// Logo Fade in

$('.logocontainer').hide().fadeIn(600,0);

$(function(){  // $(document).ready shorthand
  $('.logocontainer').fadeIn('slow');
});


// Fade In/Out Script

$(window).on("load",function() {

  $(window).scroll( function(){ 

    $('.fadesection').each(function(){

      var top_of_object = $(this).offset().top;
      
      var bottom_of_window = $(window).scrollTop() +
      $(window).innerHeight();

      if(top_of_object < bottom_of_window){

        if ($(this).css("opacity")==0) {
          $(this).fadeTo(650,1);
        }
      } else {
        // if ($(this).css("opacity")==1) {
        //   $(this).fadeTo(550, 0);
        // }
      }
    });

  }); 

});


// Smooth slide toggle

$('nav').onePageNav();

$('#nav-btn').click(function(){
  $('nav').slideToggle();
});

// Allows Nav Bar to come back on resize 

var nav = $('#mainNav');

$(window).resize(function(){
   var width = $(window).width();
   if(width > 768 && nav.is(':hidden')) {
       nav.removeAttr('style');
   }
});


// Resets Menu on click

$('#mainNav li a').click(function(){
  const width = $(window).width();
  if(width <= 768){
    $('#mainNav').slideUp();
  }
});

// Footer Year updater


 var today = new Date();
 var year = today.getFullYear();

 var el = document.getElementById('footer');
 el.innerHTML = '<p>Copyright &copy '  + year + 
 ' Utility Expense Reduction, LLC. All Rights Reserved.</p>';

// Parallax Effect

$('.parallax-window').parallax({imageSrc: 'img/electric_lo.jpg'});

$('.parallax-window2').parallax({imageSrc: 'img/aboutus_lo.jpg'});

$('.parallax-window3').parallax({imageSrc: 'img/mission1_lo.jpg'});

$('.parallax-window4').parallax({imageSrc: 'img/green_energy_lo.jpg'});

$('.parallax-window5').parallax({imageSrc: 'img/marketinformation_lo.jpg'});

