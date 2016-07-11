/**
 * Created by tanglili on 16/6/29.
 */
$(function () {


// 点击取消按扭
    $("#showPopup").on("click", function () {
        showDiv();
    });
    $("#btnClose").on("click", function () {
        hideDiv();
    });
});
// 显示遮罩层 START
function showDiv() {
    // $(".video-box").remove();
    $(".bg").show();
    $("#pauseTipDiv").show();
    $("body,html").css({"overflow": "hidden"});
}

// 隐藏遮罩层 START
function hideDiv() {
    $(".bg").hide();
    $("#pauseTipDiv").hide();
    $("body,html").css({"overflow": "auto"});
}