if(finalBmi < 18.5){
			//document.bmiForm.meaning.value = "That you are too thin."
			$('#meaning').val("That you are too thin");
		}
		if(finalBmi > 18.5 && finalBmi < 25){
			//document.bmiForm.meaning.value = "That you are healthy."
			$('#meaning').val("That you are healthy");
		}
		if(finalBmi > 25){
			//document.bmiForm.meaning.value = "That you are overweight."
			$('#meaning').val("That you are overweight");

