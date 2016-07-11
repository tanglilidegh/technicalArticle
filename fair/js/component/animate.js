/**
 * Created by tanglili on 16/6/30.
 */
var animationDiv1 = $(".bottom-triangle");
animationDiv1.bind("webkitAnimationEnd", function() {
    animationDiv1.removeClass("bottom-triangle-animate1");
    animationDiv1.addClass("bottom-triangle-animate2");
});

var animationDiv2 = $(".top-triangle");
animationDiv2.bind("webkitAnimationEnd", function() {
    animationDiv2.removeClass("top-triangle-animate1");
    animationDiv2.addClass("bottom-triangle-animate2");
});

var animationDiv3 = $(".lb-head");
animationDiv3.bind("webkitAnimationEnd", function() {
    animationDiv3.removeClass("lb-head-animate1");
    animationDiv3.addClass("lb-head-animate2");
});
// var animationDiv4 = $(".lb-title");
// animationDiv4.bind("webkitAnimationEnd", function() {
//     animationDiv4.removeClass("lb-title-animate1");
//     animationDiv4.addClass("lb-title-animate2");
// });