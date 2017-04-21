$(document).ready(function(){
	$('.zxq-ul li').click(function(){
	
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.zxq-ul img').removeClass('active1').eq($(this).index()).addClass('active1');
	})
	$('.zxq-ul1 li').click(function(){
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.zxq-ul1 img').removeClass('active1').eq($(this).index()).addClass('active1');
	})
})
