function delay (URL) {
	setTimeout(function(){changeurl(URL);},1000);
	document.getElementById('contentfr').style.animation="ifoutanimax";
	document.getElementById('contentfr').style.animationDuration="1.5s";
}
function changeurl(URL)
{
	document.getElementById('contentfr').src=URL;
	document.getElementById('contentfr').style.animation="ifanimax";
	document.getElementById('contentfr').style.animationDuration="1.5s";
}