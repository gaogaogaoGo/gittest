
jQuery(document).ready(function($) {
	
	// window.onload=function(){  
	//   window.onresize = adjust;  
	//   adjust();  
	// }

	// function adjust() {

	// 	var totalwidth = $(document).width();
	// 	if(totalwidth >= 1500){
	// 		$('.signin').width(totalwidth*0.3);
	// 	}
	// 	if(totalwidth >= 1200 && totalwidth< 1500){
	// 		$('.signin').width(totalwidth*0.4);
	// 	}
	// 	if(totalwidth >= 800 && totalwidth< 1000){
	// 		$('.signin').width(totalwidth*0.6);
	// 	}
	// }

	$('.input-top, .input-bottom').on('click',function (evt) {
		$(evt.currentTarget).children('input').val('');
	});

});