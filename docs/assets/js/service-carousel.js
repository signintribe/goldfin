// jQuery script for service carousel

$(document).on('ready', function() {
    "use strict";
    $(".service").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        pagination: false

    });

});


$(document).on('ready', function() {
  "use strict";
  $(".service1").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
    navigation: true, // Show next and prev buttons
    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    pagination: false

  });

});
