$(function() {
	$('nav button').click(function() {
		$('div').toggleClass($(this).attr('class'));
	});
});