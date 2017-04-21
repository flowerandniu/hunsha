$(document).ready(function(){
	$('.letter a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
})
