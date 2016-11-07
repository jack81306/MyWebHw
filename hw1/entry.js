function treeclick()
{
	document.getElementById("tree").style.animation="treedisapear";
	document.getElementById("tree").style.animationDuration = "3s";
	document.getElementById("lefttree").style.animation="ltreedisapear";
	document.getElementById("lefttree").style.animationDuration="3s";
	document.getElementById("lefttree").style.animationDelay="1s";
	document.getElementById("righttree").style.animation="rtreedisapear";
	document.getElementById("righttree").style.animationDuration="3s";
	document.getElementById("righttree").style.animationDelay="1s";
	setTimeout("out()",2800);
}

function out()
{
	location.href="menu/menu.html";
}