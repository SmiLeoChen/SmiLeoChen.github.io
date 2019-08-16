/**
 * Created by keda208 on 2017/4/5.
 */
$(function(){
    jQuery.scrollTo=function(scrolldom,scrolltime){
        $(scrolldom).click(function(){
            var scrollToDom = $(this).attr("page-scroll");
            $('html,body').animate(
                {
                    scrollTop:$(scrollToDom).offset().top-200
                },
                scrolltime
            );
            return false;
        });
    };
    $.scrollTo(".what_left a",500);

});






