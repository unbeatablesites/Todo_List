$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});


$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(3000 , function(){
		$(this).remove();
	});
	
	event.stopPropagation();	

});


$("#input").keypress(function(event){
if(event.which === 13){
	var todoText = $(this).val();
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText+ "</li>");
	$(this).val("");
}
});

$(".fa-plus").click(function(){
	$("#input").fadeToggle(2000);
});



