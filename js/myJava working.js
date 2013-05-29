//***********************************************TOGGLE BUTTON*****//
$(document).ready(function(){
                    $('button.toggleBtn').click(function(){
                        $(this).toggleClass("down");
                    });
                });



//***********************************************COLLAPSE TOGGLE ALL*****//
$('button.toggleBtn').click(function() {

 			$('#collapseMain, #collapseMain2, #collapseOne, #collapseTwo').each(function(index) {
					$(this).collapse("hide");
				});
                //$('#collapseOne, #collapseTwo').collapse('hide');
                
			});

$('button.toggleBtn').click(function() {

                $('#collapseMain, #collapseMain2').each(function(index) {
                    $(this).collapse("show");
                   
                });
                    $('#collapseOne, #collapseTwo').collapse('hide');
            });


