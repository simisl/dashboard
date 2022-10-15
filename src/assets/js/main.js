$(function() {

	$('.js-multiple-select').select2({
		tags: true,
		tokenSeparators: [',', ' '],
		placeholder: 'Type here'
	});
  $(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
  });

});
