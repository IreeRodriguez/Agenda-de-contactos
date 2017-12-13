$(document).ready(function(){
	$('.add').click(function(){
		 $('.modalForm').show();
	});
	$('.close').click(function(){
		 $('.modalForm').hide();
	});

	$('.btnSubmit').click(saveContact);

	function saveContact(){
		var name = $('#name').val();
		var phone = $('#phone').val();

		$('.contacts').append("<div class='panel panel-info'>" +

		"<div class='panel-heading'>" + name +
		"</div>" +
		"<div class='panel-body'>" + phone +
		"</div>" + "</div>")

		$('.modalForm').hide();
		$('#name').val('');
		$('#phone').val('');


	};
});
