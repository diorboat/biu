//类似window.onload; 一个页面中可以添加多个ready事件;
//$(window).ready(function (){
$(function (){	
	//console.log(typeof jQuery());
	//console.log(typeof $());
	//console.log($(".box").length);
	//console.log($(".box").width());
	//console.log($(".box").height());
	//console.log($(".box").size()); //获取标签长度;

	//添加事件发方法:
	/*
	$(".box").click(function (){
		//console.log($(this).index());
		var ind = $(this).index();
		//console.log($(".box").eq(ind));
		//$(".box").eq(ind).css({'background':'blue','width':'200px'});
		$(this).css({'background':'blue'}).siblings('.box').css({'background':'red'});
	});
	*/
	//筛选;
	//console.log($(".box").eq(1));
	//console.log($(".box").eq(1).siblings('.box'));


	//基本选择器:
	//$(".box a").css({"font-size":"30px"});
	$(".box>p").css({"color":"red"});
	//$("a,.active,h2").css({"color":"red"});
	//$("p.active").css({"color":"red"});
	//$("*").css({"color":"red"});
	//$("p.active+p").css({"color":"red"});
	//$("p.active~p").css({"color":"red"});
	//过滤选择器:
	//$(".box:eq(1)").css({"color":"red"});
	//$(".box:nth-child(3)").css({"color":"red"});
	//$(".box:nth-child(even)").css({"color":"red"});
	//$(".box:nth-child(odd)").css({"color":"blue"});
	//$(".box:first").css({"color":"red"});
	//$(".box:last").css({"color":"red"});
	//$(".box:not(.abc)").css({"color":"red"});
	//$(".box:even").css({"color":"red"});
	//$(".box:odd").css({"color":"blue"});
	//console.log($(".box:hidden"));
	//console.log($(".box:visible"));
	//$(".box:gt(2)").css({"color":"yellow"});
	//$(".box:lt(2)").css({"color":"yellow"});

	//属性过滤选择器:
	//$("div[style]").css({"color":"yellow"});
	//$("div[class=box]").css({"color":"yellow"});
	//$("div[class!=box]").css({"color":"yellow"});
	//$("div[class^=ss]").css({"color":"yellow"});
	//$("div[class$=c]").css({"color":"yellow"});
	//$(".info").css({"color":"yellow"});
	//$("div[class][id]").css({"color":"yellow"});
	//$("div[class*=oxs]").css({"color":"yellow"});

	//表单过滤选择器:
	//$("input:password").css({"height":"50px"});
	//$("input:password").css({"height":"50px"});
	//$("input:disabled").css({"height":"50px"});
	//$(":selected").css({"display":"none"});
});
/*
$(window).ready(function (){
	alert(2);
});
*/
//window.onload页面中只能有一个;
/*window.onload = function (){
	alert(1);
};
window.onload = function (){
	alert(2);
};*/