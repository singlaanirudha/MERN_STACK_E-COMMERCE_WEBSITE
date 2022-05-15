// TO TOP ANIMATION

import $ from 'jquery';

$(window).on("scroll", function(){
    if($(window).scrollTop()>80)
    {
        $("#totop").addClass("totop_box_js");
    }
    else
    {
        $("#totop").removeClass("totop_box_js");
    }
});