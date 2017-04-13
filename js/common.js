$(document).ready(function() {
	//EVENT HOVER
		//for correct operation when changing the size
	var countForDisplay = 0;

	function windowSize(){
	
    	if ($(window).width() >= '768'){
        	hoverMenu();
        	countForDisplay = 0;
        	onlyOneMenu();
     
		}else{
  			delEvent($('.bikes, .scooters'));
		}
	}
	//for add hover
	function hoverMenu(){
	
		$('.bikes, .scooters').hover(function(){

			$(this).find('.for-hov').fadeIn(300);
			}, function(){
			$(this).find('.for-hov').fadeOut(300);
		});
		
		$('.main-nav').css("display", "block");

		
	}

	//for del event
	function delEvent(el){

		countForDisplay++;
		el.off();

		if (countForDisplay === 1
			&& $('.for-hov').css('display') !== 'block'
			&& $('.hidd-menu-scooters').css('display') !== 'block'){
			
			$('.main-nav').css("display", "none");
		}
		
	}
	//for del event
	$(window).on('load resize',windowSize);

	var countForOneOpenMenu = 0;

	$('.but-sli-menu').click(function(){
		countForOneOpenMenu++;
		$(this).parent().find('.for-hov').slideToggle("slow");

		if (countForOneOpenMenu === 1) {
			$(this).parent().find('.for-hov').addClass("firstClick");
		}
	});
	//TOGLE MENU FOR MOBILE
	$(".wr-butt").click(function() {
	
		
		$(".main-nav").slideToggle("slow");
		$('.for-hov').slideUp("slow");
		return false;
	});
	//If two menus are open and the screen size is changed
	function onlyOneMenu(){

		if ($('.for-hov').css('display') === 'block'){

			$('.for-hov').css("display", "none");
			$('.firstClick').css("display", "block");
		}
	}

});//ready