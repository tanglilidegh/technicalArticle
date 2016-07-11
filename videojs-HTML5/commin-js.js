/**
 * Created by tanglili on 16/6/17.
 */
// 以下代码的作用: 判断是否在微信中，阻止事件的默认行为，检测用户设备，模拟用户在滚动浏览器


// 在APP中想把某个页面分享到微信的好友或微信朋友圈，HTML5页面中有些操作可能会需要判断当前是微信浏览器还是手机上的浏览器，
// 下面的方法就是用来解决这个问题的。

// 判断是否在微信中
function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger' ? true : false;
}

// 在同一个页面中，有两个地方有下载按扭，一个在页面底页fixed 定位层上面的“立即下载”，还有一个是当限制用户观看视频时间到了之后会有一个弹出层
// 在这个弹出层上面会有一个下载的按扭。
$(function () {
    // 根据不同情况进行提示或跳转
    $(".download-link").on("click", function (event) {
        var in_weixin = is_weixin();
        // var in_weixin = true;
        if (in_weixin) {  // 在微信里面
            // 阻止事件的默认行为
            event.preventDefault();
            $("#toBrowser").show();
            hidediv();
        } else {  // 在系统的浏览器里面
            setTimeout(function () {
                window.location = '/download/index';
            }, 2000);
        }
    });

// 上面的js代码解决的问题是：
// 1，先判断是否在微信中，如果在，就不跳转，弹出提示层，让用户在浏览器中打开。
// 2，如果不在微信中，在浏览器中，就2秒后跳转到下载页面。
// function (event) { event.preventDefault(); }


    // 点击蒙层隐藏
    $("#toBrowser").on("click", function () {
        $(this).hide();
    });

    // 点击取消按扭
    $("#btnclose").on("click", function () {
        hidediv();
    });

    // 分享按扭
    $("#tip-btn").on("click", function () {
        player.pause();
        $("#toShare").show();
    });

    // 点击蒙层、提示层隐藏
    $("#toShare").on("click", function () {
        $(this).hide();
    });
    // 图片在一定范围内滑动的插件
    $("#content-main").mThumbnailScroller({
        theme: "hover-classic"
    });

});

// 显示遮罩层 START
function showdiv() {
    $(".video-box").remove();
    $(".bg").show();
    $("#pauseTipDiv").show();
    // 将超出显示器外的内容进行隐藏，阻止用户滚动屏幕
    $("body,html").css({"overflow": "hidden"});
}

// 隐藏遮罩层 START
function hidediv() {
    $(".bg").hide();
    $("#pauseTipDiv").hide();
    $("body,html").css({"overflow": "auto"});
}
// 检测用户设备的第三方插件
function getDeviceName() {
    var parser = new UAParser();
    // 获取到当前用户的设备名称，品牌，系统信息
    var deviceInfo = parser.getDevice();
    var InfoArr = [];
    // 遍历对象，并用逗号分割，然后存进数组中
    $.each(deviceInfo,function (i,n) {
        InfoArr += i + "," + n + ",";
    });
    var arg = InfoArr.split(",");
    console.log(arg);
    // map() 把每个元素通过函数传递到当前匹配集合中，生成包含返回值的新的 jQuery 对象。
    // 对于获得或设置元素集的值特别有用。
    arg = arg.map(function (item) {
        return item.toLowerCase();
    });
    // 判断某个字符串是否在数组中
    if($.inArray("iphone", arg) && $.inArray("apple", arg)){
        // alert("OK");
        changeScrollTop();
    }
}

// 模拟用户在滚动浏览器
// 将滚动条的scrollTop值加1或减1
function changeScrollTop() {
    var counter = 1;
    var setIntv = setInterval(function () {
        var sTop = $(document).scrollTop();
        sTop = counter % 1 == 0 ? sTop + 1 : sTop - 1;
        if (counter >= 10) {
            clearInterval(setIntv);
        }
        $(document).scrollTop(sTop);
        counter++;
    }, 1000);
}

function changsPlayerCss() {
    // $(".video-info")
    // $("#player").css({"z-index": "-1000000","display":"inline-block"});
}
