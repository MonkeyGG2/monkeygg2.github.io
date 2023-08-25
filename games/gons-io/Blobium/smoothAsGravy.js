window.onload = function() 
{
	var htmlCanvas = document.getElementById('#canvas');
	
	initialize();

	function initialize() 
	{
		window.addEventListener('resize', resizeCanvas, false);
		
		resizeCanvas();
	}
		
	function resizeCanvas() 
	{
		htmlCanvas.width = window.innerWidth;
		htmlCanvas.height = window.innerHeight;
	}

};
