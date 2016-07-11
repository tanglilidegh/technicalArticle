(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "../jquery.validate"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {

    /*
     * Translated default messages for the jQuery validation plugin.
     * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
     */
    $.extend($.validator.messages, {
        required: "这是必填字段",
        // remote: "请修正此字段",
        // email: "请输入有效的电子邮件地址",
        // url: "请输入有效的网址",
        date: "请输入有效的日期",
        // dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入有效的数字",
        digits: "只能输入数字",
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串")

    });

}));