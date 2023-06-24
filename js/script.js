$(document).ready(function(){

    $('.review_slaider').slick({
        centerMode: true,
         centerPadding: '0px',
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow : ".prev_arrow",
         nextArrow : ".next_arrow",
         autoplay: true,
         autoplaySpeed: 2000,
         dots: true

    });

		// <!--Smooth Page Scroll to Top-->
			$(window).scroll(function(){

				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
					$("nav").addClass("nav_show").fadeIn()
				} else {
					$('.scrollup').fadeOut();
					
				}
				if($(this).scrollTop() < 200){
					$("nav").removeClass("nav_show")
				}
			}); 
	 
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});

		
		// <!--//-->




		$('a[href^="#"]').bind('click.smoothscroll',function (e) {
			e.preventDefault();
			var target = this.hash,
				$target = $(target);
		
			$('html, body').stop().animate( {
			  'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
			  window.location.hash = target;
			} );
		  } );
		



// end ......
  });



  
  function check_form() {
			
	// Get the form element
	var form = document.querySelector("#form1");
  
	// Get the form elements
	var name = form.elements["name"];
	var email = form.elements["email"];
  
	// Check if the name field is empty
	if (name.value == "") {
	  alert("Please enter your name");
	  name.focus();
	  return false;
	}
  
	// Check if the email field is empty or invalid
	if (email.value == "") {
	  alert("Please enter your email address");
	  email.focus();
	  return false;
	} else if (!isValidEmail(email.value)) {
	  alert("Please enter a valid email address");
	  email.focus();
	  return false;
	}
  
	function isValidEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);

		return false;
	  }
	// If all fields are valid, return true
	return false;
  }

  // mixeit up
		  
  var containerEl = document.querySelector('.work_wraper');

  var mixer = mixitup(containerEl);

