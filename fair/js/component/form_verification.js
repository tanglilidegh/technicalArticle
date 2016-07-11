$(document).ready(function(){
    $(".btn-slide1").click(function(){//当点击向下剪头块触发silideToggle
        $("#panel1").slideToggle("slow");
        $(this).toggleClass("active"); return false;//触发后然后改变小图标方向，css在.active定义的
    });

    $(".btn-slide2").click(function(){
        $("#panel2").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });

    $(".btn-slide3").click(function(){
        $("#panel3").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
});


var $fileName = $('.fileName');
$('input[type=file]').change(function () {
    var path = $(this).val();
    var fileName = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
    $fileName.text(fileName);
});


