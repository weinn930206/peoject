var mySwiper = new Swiper('.swiper-container', {
	autoplay: 4000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	paginationClickable :true,
	loop:true,
});

$(".smallImgs").hover(function(){
	$i = $(this).index();
	$(".bigImgs>img").eq($i).show().siblings().hide();
	$(".smallImgs").eq($i).css("background","rgb(238,238,238").siblings().css("background","white");
});

$.each($(".footCon ul li"),function () {
	$(".footCon ul li img").hover(function () {
		$(this).attr("src","../img/home/download-1.png")
	},function () {
		$(this).attr("src","../img/home/download.png")
	})
})

$(".company").click(function () {
	$(".newsLeft").animate({marginLeft:"-100%"}),
	$(".newsRight").animate({marginLeft:"-100%"}),
	$(".company").css({"background":"rgb(140,152,159)" ,"color":" white"}),
	$(".industry").css({"background":"transparent" ,"color":" black"})

});
$(".industry").click(function () {
	$(".newsLeft").animate({marginLeft:"0"}),
	$(".newsRight").animate({marginLeft:"0"}),
	$(".industry").css({"background":"rgb(140,152,159)" ,"color":" white"}),
	$(".company").css({"background":"transparent" ,"color":" black"})
})
