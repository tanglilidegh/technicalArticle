/**
 * Created by tanglili on 16/6/29.
 */

var intDiff = parseInt(882119); //倒计时总秒数量

function timer(intDiff){
    window.setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值		
        if(intDiff > 0){
            // day = Math.floor((intDiff / (60 * 60 * 24))*24);
            hour = Math.floor(intDiff / (60 * 60));
            // minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            minute = Math.floor((intDiff - (hour * 60 * 60))/60);
            second = Math.floor(intDiff) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        // $('#day_show').html(day+"天");
        $('#hour_show').html('<s id="h"></s>'+hour);
        $('#minute_show').html('<s></s>'+minute);
        $('#second_show').html('<s></s>'+second);
        intDiff--;
    }, 1000);
}

$(function(){
    timer(intDiff);
});	