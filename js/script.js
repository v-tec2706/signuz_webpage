$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 150
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash -150;
        });
      } // End if
    });
  });

// console.log("starting logg");

// var lastId,
// topMenu = $("#mainNav"),
// topMenuHeight = topMenu.outerHeight()+1,
// // All list items
// menuItems = topMenu.find("a"),
// // Anchors corresponding to menu items
// scrollItems = menuItems.map(function(){
//   var item = $($(this).attr("href"));
//    if (item.length) { return item; }
// });


// console.log("topMenu:  " + topMenu);
// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//  var href = $(this).attr("href"),
//      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//  $('html, body').stop().animate({ 
//      scrollTop: offsetTop
//  }, 850);
//  e.preventDefault();
// });

// // Bind to scroll
// $(window).scroll(function(){
//   // Get container scroll position
//   var fromTop = $(this).scrollTop()+topMenuHeight;
  
//   // Get id of current scroll item
//   var cur = scrollItems.map(function(){
//     if ($(this).offset().top < fromTop)
//       return this;
//   });
//   // Get the id of the current element
//   cur = cur[cur.length-1];
//   var id = cur && cur.length ? cur[0].id : "";
  
//   if (lastId !== id) {
//       lastId = id;
//       // Set/remove active class
//       menuItems
//         .parent().removeClass("active")
//         .end().filter( '[href="#' + id + '"]' ).parent().addClass( "active" );
//   }                   
// });

// $(document).ready(function(){
//     // $sections incleudes all of the container divs that relate to menu items.
//     var $sections = $('section');
    
//     // The user scrolls
//     $(window).scroll(function(){
      
//       // currentScroll is the number of pixels the window has been scrolled
//       var currentScroll = $(this).scrollTop();
      
//       // $currentSection is somewhere to place the section we must be looking at
//       var $currentSection
      
//       // We check the position of each of the divs compared to the windows scroll positon
//       $sections.each(function(){
//         // divPosition is the position down the page in px of the current section we are testing      
//         var divPosition = $(this).offset().top;
        
//         // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
//         // the -1 is so that it includes the div 1px before the div leave the top of the window.
//         if( divPosition - 10 < currentScroll ){
//           // We have either read the section or are currently reading the section so we'll call it our current section
//           $currentSection = $(this);
          
//           // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
//         }
        
//         // This is the bit of code that uses the currentSection as its source of ID
//         console.log("Current section: " + $currentSection)
//         var id = $currentSection.attr('id');
//           $('a').removeClass('active');
//           $("[href=#"+id+"]").addClass('active');
//           console.log("Id: " + id)
//       })
  
//     });
//   });