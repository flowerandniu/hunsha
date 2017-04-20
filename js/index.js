$(document).ready(function(){
	//banner
	let i=0;
	let img=$('.banner').find('.screen');//
	let letter=$('.banner .circle div');//
 	function move(way='right'){
 		if(way=='right'){
 			i++;
	 		if(i>=img.length){
	 			i=0;
	 		}
 		}
 		if(way=='left'){
 			i--;
 			if(i<0){
	 			i=img.length-1;
	 		}
 		}
 		img.css('opacity','0').eq(i).css('opacity','1');
 		letter.removeClass('active').eq(i).addClass('active');
 	}
	 let t=setInterval(move,2000);
	$('.banner').mouseover(function(){
		clearInterval(t);
	})
	$('.banner').mouseout(function(){
		t=setInterval(move,2000);
	})
	let flag=true;
	$('.left').click(function(){
		if(flag==true){
			flag=false;
			move();
		}	
	})
	$('.right').click(function(){
		if(flag==true){
			flag=false;
			move('left');
		}	
	})
	img.each(function(index){
		img[index].addEventListener('transitionend',function(){//事件监听，当transition运行完毕，执行 
				flag=true;
		})
	})
	letter.mouseover(function(){
		img.css('opacity','0').eq($(this).index()).css('opacity','1');
		letter.removeClass('active').eq(i).addClass('active');
	})
})
