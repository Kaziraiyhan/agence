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
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
	 
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		// <!--//-->



		// form validation

		  
		  // Function to check if an email is valid

		//   form validation End

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