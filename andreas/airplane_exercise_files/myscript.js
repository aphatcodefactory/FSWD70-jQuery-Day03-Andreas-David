$(document).on('mousemove', function(e) {
	$('#moveme').css({
		left: e.pageX - 120,
		top: e.pageY - 120
	});

	$('#moveme').on('click', function(e) {
		$(this).css({
			left: e.pageX,
			top: e.pageY
		});
	});
});

