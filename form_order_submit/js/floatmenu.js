(function(window, document) {
    var styles = '.fe-floatmenu{position: fixed;top:10px;padding:5px;background: #fff;border:1px solid #919191;z-index:100000000;width:150px;}.fe-floatmenu>ul{display: block;}.fe-floatmenu.show{width:200px;padding:2px;}.fe-floatmenu.show>ul{display: block;}.fe-floatmenu.show>a{text-align:center;}.fe-floatmenu a{color:#434343;display: block;height:18px;line-height:18px;}.fe-floatmenu li{border:1px solid #fff;padding:2px 6px;margin-bottom:-1px;background: #f0f0f0;}.fe-floatmenu .close{display:block;position:absolute;right:2px;top:2px;color:#00a1d7;}.fe-floatmenu a:hover{color:#00a1d7;}.fe-floatmenu>ul>li>ul{display: block;padding-left:10px;}.fe-floatmenu>ul>li>ul>li>ul{display: block;padding-left:10px;}.fe-floatmenu>ul>li>ul>li>ul>li>ul{display: none;padding-left:10px;}.fe-floatmenu .hassubmenu>a{position: relative;padding-bottom:3px;}.fe-floatmenu .hassubmenu>a:after{content:"+";position: absolute;right:0;top:0;}.fe-floatmenu .hassubmenu.show>ul{display: block;}.fe-floatmenu .hassubmenu.show>a:after{content:"-";}';
    var html = '<div class="fe-floatmenu">' +
        '<a href="javascript:;">页面导航</a>' + '<a class="close" href="javascript:;">关闭</a>' +
        '<ul>' +
        '<li><a href="index.html">首页</a></li>' +
        '<li><a href="service-fair.html">服务集市</a></li>' +
        '<li><a href="service-detail.html">服务内容页</a></li>' +
        '<li><a href="business-info.html">商家信息</a></li>' +
        '<li><a href="rebate-order.html">抵扣券订单页</a></li>' +
        '<li><a href="rebate-detail.html">抵扣券详情页</a></li>' +
        '<li><a href="rebate-detail-steps3.html">抵扣券详情-步骤3</a></li>' +
        '<li><a href="evaluation.html">评价页</a></li>' +
        '<li><a href="business-contact.html">商家联系方式</a></li>' +
        '<li><a href="service-message.html">客服消息</a></li>' +
        '<li><a href="send-message.html">发送消息页</a></li>' +
        '<li><a href="demand-detail.html">需求详情页</a></li>' +
        '<li><a href="reply.html">回复页</a></li>' +
        '<li><a href="all-demand.html">全部需求页</a></li>' +
        '<li><a href="demand-fair.html">需求大厅</a></li>' +
        '<li><a href="mydemand.html">我的需求页</a></li>' +
        '<li><a href="myconsulting.html">我的咨询</a></li>' +
        '<li><a href="comment.html">发表评价</a></li>' +
        '<li><a href="release-requirements.html">发布需求</a></li>' +
        '<li><a href="modify-card.html">修改名片页</a></li>' +
        '<li><a href="personal-center.html">个人中心</a></li>' +
        '<li><a href="company-phase.html">公司阶段</a></li>' +
        '<li><a href="rebate-order-situation.html">抵扣券订单详情页</a></li>' +
        '<li><a href="service-main.html">服务总页面</a></li>' +
        '<li><a href="landing.html">登陆页</a></li>' +
        '<li><a href="verify-rebate.html">验证抵扣券</a></li>' +
        '<li><a href="demand-management.html">需求管理页</a></li>' +
        '<li><a href="company-info.html">公司信息</a></li>' +
        '<li><a href="business-background.html">商家后台</a></li>' +
        '<li><a href="order-management.html">订单管理</a></li>' +
        '<li><a href="all-providers.html">全部服务商</a></li>' +
        '</ul>' +
        '</div>';
    var styleWrap = document.createElement("style");

    styleWrap.innerHTML = styles;
    document.body.appendChild(styleWrap);

    var htmlWrap = document.createElement("div");
    htmlWrap.innerHTML = html;
    document.body.appendChild(htmlWrap);

    var $ = document.querySelectorAll.bind(document);

    Element.prototype.on = Element.prototype.addEventListener;

    NodeList.prototype.on = function(event, fn) {
        [].forEach.call(this, function(el) {
            el.on(event, fn);
        });
        return this;
    };

    var css = function(t, s) {
        s = document.createElement('style');
        s.innerText = t;
        document.body.appendChild(s);
    };
    $(".fe-floatmenu>a").on("click", function(e) {
        $("a.close")[0].style.display = "block";
        $(".fe-floatmenu ul")[0].style.display = "block";
        this.parentNode.classList.add('show');
    });

    $(".fe-floatmenu").on("mouseleave", function(e) {
        // this.classList.remove('show');
    });
    $(".close").on("click", function(e) {
        $("a.close")[0].style.display = "none";
        $(".fe-floatmenu ul")[0].style.display = "none";
        $(".fe-floatmenu")[0].classList.remove('show');
    });
    $(".fe-floatmenu .hassubmenu").on("click", function(e) {
        e.stopPropagation();
        var obj = this.children[1];
        var display = window.getComputedStyle(obj).display;
        if (display == "block") {
            this.classList.toggle('show');
        } else if (display == "none") {
            this.classList.toggle('show');
        }
    });
})(window, document);
