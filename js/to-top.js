// JavaScript Document

$(document).ready(function(){

	$('.to-top').click(function () { //Animate a scroll to top when clicking the arrow
		$('body,html').animate({ scrollTop: 0}, 1000);
	});

    $('#contactScroll').click(function (){
			scrollToAnchor('jump-to-contact');
			//Make button colors animate
			setTimeout(function(){
				$('.contact-column a').addClass('animate_contacts');
			}, 1000);
			setTimeout(function(){
				$('.contact-column a').removeClass('animate_contacts');
			}, 2000);
			return false;

    });

	$(window).scroll(function() {

				  var height = $(window).scrollTop();


				  if(height < 400)
					{
       					 $('.to-top').fadeOut('slow', function() {
     						$(this).css('opacity','0');
                            $(this).css('display','none');
  							});
					}

					else if(height > 400)
					{
       					 $('.to-top').fadeIn('slow', function() {
     						$(this).css('opacity','1');
                            $(this).css('display','block');
  							});
					}
	});


    function scrollToAnchor(idName){
    		var aTag = $("a[name='"+ idName +"']");
    		$('html,body').animate({scrollTop: aTag.offset().top-100},'slow');
		}



});//Closing doc ready
