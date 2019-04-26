// good luck !
(function(){
	console.log("good luck !");

	// Initialiser les boutons et leur bg color

	// En même temps, leur mettre des listener

	/* Listener : 
	 Si checkbox is checked
		change la couleur du text,
	sinon, change la couleur du fond de la page.
	*/

	console.log('init');

	var buttons = $("[type='button']");
	var checkbox = $("[type='checkbox']");

	// Init bg color
	for(var i=0; i< buttons.length; i++){
		var button = $(buttons[i]); // convert to jQuery object
		var buttonColor = button.data('color');

		button.css('background', buttonColor);
	}

	// Add listener
	buttons.click(function(){
		var isChecked = checkbox.is(':checked');
		var color = $(this).data('color');

		if(isChecked){
			$('.main').css('color', color);
		}else{
			$('body').css('background', color);
		}
	});

})();