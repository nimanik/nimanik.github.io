$(document).ready(function() {
	$("#pic").click(function() {
		$(this).toggle('explode');
	});
	$('p').click(function() {
        $(this).effect("bounce", { times:3 }, 300);
	 });
	     $('li').click(function() {
        $(this).effect('slide');
    });
});
