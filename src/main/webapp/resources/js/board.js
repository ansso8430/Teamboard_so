$( document ).ready( function() {
    $( '.memId' ).click(
		function() {
			$( '.rank' ).addClass( 'show' );
		});
	$('.memId').mouseout(function () {
        $('.rank').removeClass('show');
    });
	
});

