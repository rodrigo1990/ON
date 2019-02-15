
	function abrirInterfaceForm(){

		$("#interfaceFormBtn").removeClass("rollIn");
		$("#interfaceFormBtn").addClass("fadeOutUp");


		$("#interfaceForm").show();
		$("#interfaceForm").removeClass("fadeOutUp");
		$("#interfaceForm").addClass("fadeInUp");

		
		//$("#interfaceForm").show();

	}

	function cerrarInterfaceForm(){

		$("#interfaceFormBtn").show();

		$("#interfaceFormBtn").removeClass("fadeOutUp");
		$("#interfaceFormBtn").addClass("rollIn");

		$("#interfaceForm").removeClass("fadeInUp");
		$("#interfaceForm").addClass("fadeOutUp");


		setTimeout( function() {
		$("#interfaceForm").hide();
	  	}, 500);


		//$("#interfaceForm").hide();
		

	}