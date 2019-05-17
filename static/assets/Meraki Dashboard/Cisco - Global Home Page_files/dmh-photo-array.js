/*!* Photo array 1.0 */
/*
 *  v1.0 Initial check-in
 */
jQuery(document).ready(function () {
    cdc.util.ensureNamespace("cdc.dm.photoArray");

    cdc.dm.photoArray.init = function () {
        var tines = jQuery('.dmh-photo-array');
        for (i = 0; i < tines.length; i++) {
            tines[i] = new PhotoArray(tines[i]);
        }
    };

    cdc.dm.photoArray.init();
});

function PhotoArray (argument) {
    var me = this;
    this.parent = jQuery(argument);

    // Configuring variables
    this.config = {
        photoWrapperClass: 'photo-wrapper',
        photoTileClass: 'photo-tile',
        resizeTimer: null
    };

    this.updateCarousel = function () {
        me.parent.find('.' + me.config.photoWrapperClass).slick({
            centerMode: true,       // Align image to center of yhe window
            dots: true,             // Enable navigation dots
            arrows: false,          // Disable arrows
            infinite: true,
            slidesToShow: 3,        // Number of slides to show in perticular breakpoint 
            centerPadding: me.cPadding(), // Width of a side tiles
            rtl: jQuery("html").attr("dir") == 'rtl'? true : false, //Checks for RTL
            responsive: [           // Set breakpoints to define options
                {
                    breakpoint: 1280,
                    settings: {
                        centerPadding: 0,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: me.cPadding(),
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: me.cPadding(),
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: me.cPadding(),
                        slidesToShow: 1
                    }
                }
            ]
        });
    };

    // Calculate center padding for each breakpoint to dynamically change the width of partially visible tiles
    this.cPadding = function () {
        var tilePadding, // Holds the padding for partially visible tiles as a fraction of available width
            tileMargin;  // Holds the sum of the margins between the visible tiles

        if (window.matchMedia('(min-width:80em)').matches) {
            /* As per the zeplins, 
            	tile width = 317px, 
            	partially visible tile width = 277px,
                spacing between tiles = 24px,
                tile padding [277/(277+317+317+317+277)] = 277/1505 = 0.18
            */
            tilePadding = 0.18;
            tileMargin = 96;
        }else if (window.matchMedia('(min-width:48em)').matches) {
            /* As per the zeplins, 
            	tile width = 286px, 
            	partially visible tile width = 220px,
                spacing between tiles = 20px,
                tile padding [220/(220+286+220)] = 220/726 = 0.3
            */
            tilePadding = 0.3;
            tileMargin = 40;
        } else if (window.matchMedia('(min-width:37.5em)').matches) {
            /* As per the zeplins, 
            	tile width = 286px, 
            	partially visible tile width = 136px,
                spacing between tiles = 20px,
                tile padding [136/(136+286+136)] = 136/558 = 0.25
            */
            tilePadding = 0.25;
            tileMargin = 40;
        } else {
            /* As per the zeplins, 
            	tile width = 200px, 
            	partially visible tile width = 44px,
                spacing between tiles = 16px,
                tile padding [44/(44+200+44)] = 44/288 = 0.15
            */
            tilePadding = 0.15;
            tileMargin = 32;
        }

        var val = (jQuery(window).width() - tileMargin) * tilePadding;
        return val + "px";
    }

    this.init = function () {
        me.updateCarousel();

        // To navigate to the selected tile
        me.parent.find('.' + me.config.photoTileClass).off('click').on('click', function() {
            var slideIndex = jQuery(this).attr('data-slick-index');
            me.parent.find('.' + me.config.photoWrapperClass).slick('slickGoTo', slideIndex);
        });

        jQuery(window).off('resize').on('resize', function () {
            clearTimeout(me.config.resizeTimer);
            me.config.resizeTimer = setTimeout(function () {
                // Destroy carousel
                me.parent.find('.' + me.config.photoWrapperClass).slick('destroy');
                me.updateCarousel(); // Re-initiate carousel
            }, 100);
        });
    };

    me.init();
}