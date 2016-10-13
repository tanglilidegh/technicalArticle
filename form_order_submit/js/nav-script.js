/**
 * Created by tanglili on 16/10/10.
 */
//内容信息导航吸顶
$(document).ready(function () {
    var navHeight = $("#navHeight").offset().top;
    var navFix = $("#nav-wrap");
    $(window).scroll(function () {
        if ($(this).scrollTop() > navHeight) {
            navFix.addClass("navFix");
        }
        else {
            navFix.removeClass("navFix");
        }
    })
});
//内容信息导航锚点
$('.nav-wrap').navScroll({
    mobileDropdown: true,
    mobileBreakpoint: 768,
    scrollSpy: true
});

$('.click-me').navScroll({
    navHeight: 0
});

$('.nav-wrap').on('click', '.nav-mobile', function (e) {
    e.preventDefault();
    $('.nav-wrap ul').slideToggle('fast');
});

