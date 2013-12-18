require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition',
        'jquery-waypoints': '../bower_components/jquery-waypoints/waypoints',
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        gridrotator: '../bower_components/animated-responsive-image-grid/js/jquery.gridrotator',
        'animated-responsive-image-grid': '../bower_components/animated-responsive-image-grid/js/jquery.gridrotator',
        requirejs: '../bower_components/requirejs/require',
        skrollr: '../bower_components/skrollr/dist/skrollr.min'
    },
    shim: {
        bootstrapAffix: {
            deps: [
                'jquery'
            ]
        },
        bootstrapAlert: {
            deps: [
                'jquery'
            ]
        },
        bootstrapButton: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCarousel: {
            deps: [
                'jquery'
            ]
        },
        bootstrapCollapse: {
            deps: [
                'jquery'
            ]
        },
        bootstrapPopover: {
            deps: [
                'jquery'
            ]
        },
        bootstrapScrollspy: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTab: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTooltip: {
            deps: [
                'jquery'
            ]
        },
        bootstrapTransition: {
            deps: [
                'jquery'
            ]
        },
        'jquery-waypoints': {
            deps: [
                'jquery'
            ]
        },
        gridrotator: {
            deps: [
                'jquery'
            ]
        }
    }
});
// var map;
require(['app', 'jquery', 'gridrotator', 'jquery-waypoints', 'skrollr', 'bootstrapCollapse'], function (app, $) {
    'use strict';
    
    // var s = skrollr.init();

    $(function() {

        // $( '#ri-grid' ).gridrotator( {
        //     rows        : 1,
        //     columns     : 24,
        //     animType    : 'fadeInOut',
        //     animSpeed   : 1000,
        //     interval    : 200000000,
        //     step        : 1,
        //     w320        : {
        //         rows    : 3,
        //         columns : 4
        //     },
        //     w240        : {
        //         rows    : 3,
        //         columns : 4
        //     }
        // } );
        // $( '#ri-grid1' ).gridrotator( {
        //     rows        : 1,
        //     columns     : 24,
        //     animType    : 'fadeInOut',
        //     animSpeed   : 1000,
        //     interval    : 200000000,
        //     step        : 1,
        //     w320        : {
        //         rows    : 3,
        //         columns : 4
        //     },
        //     w240        : {
        //         rows    : 3,
        //         columns : 4
        //     }
        // } );
        // $( '#ri-grid2' ).gridrotator( {
        //     rows        : 1,
        //     columns     : 24,
        //     animType    : 'fadeInOut',
        //     animSpeed   : 1000,
        //     interval    : 200000000,
        //     step        : 1,
        //     w320        : {
        //         rows    : 3,
        //         columns : 4
        //     },
        //     w240        : {
        //         rows    : 3,
        //         columns : 4
        //     }
        // } );
    });

    // map = L.mapbox.map('map', 'brutimus.map-vans9xbz')
    //   .setView([30.79, -98.80], 3);

    $('nav a').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 80;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    });


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            // $('nav').addClass('fixed');
            $('.container section').each(function(i) {
                if ($(this).position().top <= windscroll + 81) {
                    $('nav li.active').removeClass('active');
                    $('nav li').eq(i).addClass('active');
                }
            });

        } else {

            // $('nav').removeClass('fixed');
            $('nav li.active').removeClass('active');
            // $('nav li:first').addClass('active');
        }

    }).scroll();

});
