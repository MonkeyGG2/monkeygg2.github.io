function changeCursor(cursorType) 
{
	var curs = "default";
	if(cursorType==1)
		curs = "pointer";
	else if(cursorType==2)
		curs = "text";
	
	document.getElementById('#canvas').style.cursor = curs;

		
}

function openURL(urlString)
{
	window.open(urlString, '_self');
}
