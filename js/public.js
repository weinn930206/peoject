/**
 * Created by lanou3g on 17/6/26.
 */
// 导航hover
$(".nav-about,.pull-about").hover(function(){
    $(".pull-about").show();
},function(){
    $(".pull-about").hide();
});
$(".nav-news,.pull-news").hover(function(){
    $(".pull-news").show();
},function(){
    $(".pull-news").hide();
});
$(".nav-download,.pull-download").hover(function(){
    $(".pull-download").show();
},function(){
    $(".pull-download").hide();
});
// 在线交流
$(".onlineClose").click(function () {
    $(".onlineClose").hide();
    $(".onlineOpen").show();
});
$(".onlineOpen p").click(function () {
    $(".onlineOpen").hide();
    $(".onlineClose").show();
});

// position: fixed;bottom: 0;
function clientY() {
    return window.innerHeight || document.documentElement.clientHeight;
}
var height = clientY();
var iHeight = $("body").height();
if(iHeight<height){
    $(".publicFoot").css({
        "position":"fixed",
        "bottom":"0"
    })
}

