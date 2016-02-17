$(function() {
	$(document).ready(function() {
		$('#b').on('click', function() {
			var obj = $(this);
			obj.attr('disabled', true);
			$.ajax({
				url : './api/hello',
				type : 'GET',
				data : {
					user : $('#t0').val(),
				},
				dataType : 'text',
				success : function(text) {
					$('#t1').text(text);
				},
				error : function(a, b, c) {
					console.log(a);
					console.log(b);
					console.log(c);
				},
				complete : function() {
					obj.attr('disabled', false);
				}
			});
		}).click();
	});
});