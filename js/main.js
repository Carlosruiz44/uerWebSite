// $('.bg-holder').parallaxScroll({
//   friction: 0.15
// });

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




$('.material-icons').click(function(){
  const listItems = $('#mainNav').slideToggle();
});

// Bind click handler to menu items
// so we can get a fancy scroll animation, (has that weird nudge on top)
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({ 
//       scrollTop: offsetTop
//   }, 850);
//   e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;
   
//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
   
//    if (lastId !== id) {
//        lastId = id;
//        // Set/remove active class
//        menuItems
//          .parent().removeClass("active")
//          .end().filter("[href=#"+id+"]").parent().addClass("active");
//    }                   
// });








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


// Fade in Script -  Still not working

// $(document).ready(function(){

//   $(window).scroll( function(){ 

//     $('.fadesection').each(function(){

//       var bottom_of_object = $(this).offset().top +
//       $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() +
//       $(window).height();

//       if( bottom_of_window < bottom_of_object){
//         $(this).animate({'opacity':'1'},350);
//       }
//     })

//   })

// });






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



$('.parallax-window').parallax({imageSrc: 'img/electric_lo.jpg'});

$('.parallax-window2').parallax({imageSrc: 'img/aboutus_lo.jpg'});

$('.parallax-window3').parallax({imageSrc: 'img/mission1_lo.jpg'});

$('.parallax-window4').parallax({imageSrc: 'img/green_energy_lo.jpg'});

$('.parallax-window5').parallax({imageSrc: 'img/marketinformation_lo.jpg'});

