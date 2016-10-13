/*
 * 服务集市页中各个服务类目的动画效果
 */
$(function () {
    var urlHash = window.location.hash ? window.location.hash : "#basis";
    $id = $(urlHash);
    $child = $id.children('.service-classify');
    if ($child.hasClass("hid")) {
        $child.removeClass("hid");
        $(".classify-title img", $id).addClass("fa-angle-up");
    } else {
        $child.addClass("hid");
        $(".classify-title img", $id).removeClass("fa-angle-up");
    }

    var currentId = $id;

    $(".tog-arrow").click(function () {
        $(".img-arrow", currentId).removeClass("fa-angle-up");
        currentId.children(".service-classify").css("display", "none");
        $(this).parent().siblings(".service-classify").slideToggle();
        // $(this).children('img').removeClass("fa-angle-up");
        $(this).children('img').toggleClass("fa-angle-up");
        currentId = $(this).parents(".panel");
    });
});


$(function () {
    $('.class-type').on('click', function () {
        $('.current-tag').removeClass('current-tag');
        $(this).addClass('current-tag');
        $(this).children('input').prop('checked', true);
    });

    $('#releaseRequirements').on('click', function () {
        var message = $('textarea[name="demand_message"]').val();
        var classType = $('input:checked').val();

        if (!message) {
            alert('请填写需求描述');
            return false;
        }
        if (!classType) {
            alert('请选择需求分类');
            return false;
        }
        $('form').submit();
    })
});
