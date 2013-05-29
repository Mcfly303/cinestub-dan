
//***********************************************COLLAPSE TOGGLE ALL*****//
$('.titleView').click(function() {

 			$('#collapseMain, #collapseMain2').each(function(index) {
					$(this).slideUp("fast");
				});
                $('#collapseOne, #collapseTwo').collapse('hide');
                
			});

$('.fullStubView').click(function() {

                $('#collapseMain, #collapseMain2').each(function(index) {
                    $(this).slideDown("fast");
                });
                $('#collapseOne, #collapseTwo').collapse('hide');

               
            });


//***********************************************SIDEBAR COLLAPSE*****//
$(document).ready(function(){
    // Variables
    var objMain = $('#main');
 
    // Show sidebar
    function showSidebar(){
        objMain.addClass('use-sidebar');
        //$.cookie('sidebar-pref2', 'use-sidebar', { expires: 30 });//
    }
 
    // Hide sidebar
    function hideSidebar(){
        objMain.removeClass('use-sidebar');
        //$.cookie('sidebar-pref2', null, { expires: 30 });//
    }
 
    // Sidebar separator
    var objSeparator = $('#separator');
 
    objSeparator.click(function(e){
        e.preventDefault();
        if ( objMain.hasClass('use-sidebar') ){
            hideSidebar();
        }
        else {
            showSidebar();
        }
    }).css('height', objSeparator.parent().outerHeight() + 'px');
 
    // Load preference
    //if ( $.cookie('sidebar-pref2') == null ){
        //objMain.removeClass('use-sidebar');
    //}
});