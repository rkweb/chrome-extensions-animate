function testAnim(x) {
	$('#animate-box').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  $(this).removeClass();
	});
	};
	$(document).ready(function(){

	$('.js-select').change(function(){
	  var anim = $(this).val();
	  testAnim(anim);
	});
});