$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});
//ul is on page always
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
			$(this).remove();
	})
	event.stopPropagation();
});
$("input[type='text']").on("keypress",function(event){
	if(event.which===13)
	{
		var todo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todo+ "</li>");
	}

});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});