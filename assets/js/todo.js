$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});


$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(3000 , function(){
		$(this).remove();
	});
	alert("Clicked the span");
	event.stopPropagation();	

});


$("#input").keypress(function(event){
if(event.which === 13){
	var todoText = $(this).val();
	$("ul").append("<li><span>X</span> " +todoText+ "</li>");
	$(this).val("");
}
});





