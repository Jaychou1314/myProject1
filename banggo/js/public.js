//1.加载头部
$("#topWrapper").load("html/public.html #top1",function(){
	//1)下拉菜单的特效
	$(".topNav-left>li").mouseenter(function(obj){
		$(this).find("div").css("visibility","visible");
	}).mouseleave(function(){
		$(this).find("div").css("visibility","hidden");
	})
	$("#top1-1 .right>li").mouseenter(function(obj){
		$(this).find("a").css("opacity","1")
		$(this).find("#top-login").css("visibility","visible");
		$(this).find("img").css("visibility","visible");
	}).mouseleave(function(){
		$(this).find("#top-login").css("visibility","hidden");
		$(this).find("img").css("visibility","hidden");
	})
	//2).登录移入的显示和隐藏
	var $topList = $("#top1-1 .right>li");
	for(let i = 0 ; i< $topList.length ; i++){
		if($topList.eq(i).children("img").length || $topList.eq(i).children("ul").length){
			$topList.eq(i).mouseenter(function(){
				console.log(1)
				$(this).css("border-left","1px solid #ccc");
				$(this).css("border-right","1px solid #ccc");
			})
			$topList.eq(i).mouseleave(function(){
				$(this).css("border","none");
			})
		}
	}
	var $topListNav = $("#top1-1 .right>li>a");//登录等导航栏
	for(var i = 0 ; i< $topListNav.length ; i++){
		$topListNav.eq(i).ChangeOpacity();
	}
	var $topNavXia = $("#top1-1 #top-login>li>a");//下拉的透明度改变
	for(var i = 0 ; i< $topNavXia.length ; i++){
		$topNavXia.eq(i).ChangeOpacity();
	}
	var $topImgXia = $("#top-hid-img>img");//微信微博图片的透明度改变
	for(var i = 0 ; i< $topImgXia.length ; i++){
		$topImgXia.eq(i).ChangeOpacity();
	}
	//3).鼠标移入透明度改变--首页，热销分类部分
	var $top_nav = $(".topNav-left>li>a");
	for(var i = 0 ; i< $top_nav.length ; i++){
		$top_nav.eq(i).ChangeOpacity();
	}
	//领券中心
	var $oImg = $("#topNav>ol img")
	for(var i = 0 ; i< $oImg.length ; i++){
		$oImg.eq(i).ChangeOpacity();
	}
	//logo
	var $logo = $("#logo>img");
	$logo.ChangeOpacity();
});

//2.加载底部--调用滑入透明度发生改变
$("#footWrapper").load("html/public.html #footer",function(){
	//1)联系我们部分鼠标移入
	var $connect_Img = $("#connect>li>a").find("img");
	for(var i = 0 ; i< $connect_Img.length ; i++){
		$connect_Img.eq(i).ChangeOpacity()
	}
	//2)最底部鼠标滑入
	var $btm_img = $("#btm-imgS a").find("img");
	for(var i = 0 ; i< $btm_img.length ; i++){
		$btm_img.eq(i).ChangeOpacity()
	}
});

//1.鼠标移入透明度发生改变插件
$.fn.extend({
	ChangeOpacity : function(){
		this.bind("mouseenter",function(){
			this.animate({"opacity":0.7},30);
		}.bind(this))
		this.bind("mouseleave",function(){
			this.animate({"opacity":1},30);
		}.bind(this))
	}
})

