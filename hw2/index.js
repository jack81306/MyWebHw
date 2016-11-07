var i=0;

function loadi()
{
	var pre=document.getElementById("preImg");
	for(var i=0;i<52;i++)
	{
		pre.innerHTML+="<img id='"+i+"img' src='img/"+i+".jpg' onclick='changeimg(this)'>";
	}
	document.getElementById("0img").style.border="solid yellow";
	document.getElementById("aud").volume="0.25";
}

function changeimg(e)
{
	var sr=document.getElementById("innerImg").children;
	document.getElementById(sr[0].id+"img").style.border="";
	document.getElementById("innerImg").innerHTML="<img id='"+parseInt(e.id)+"' src='"+e.src+"'>";
	document.getElementById("downIcon").children[0].href=e.src;
	i=parseInt(e.id);
	document.getElementById(i+"img").style.border="solid yellow";
}
var ctr=0;
function move(e)
{
	if(i+parseInt(e)<0||i+parseInt(e)>51)return;
	i=i+parseInt(e);
	var pos=document.getElementById(i+"img").offsetLeft;
	var nowpos=document.getElementById("preImg").scrollLeft;
	var dis=pos-nowpos;
	var divwidth=document.getElementById("preImg").offsetWidth;
	if(dis>document.getElementById("preImg").offsetWidth-300||dis<0)
	{
		var len;
		if(dis>0)
		{
			len=(document.getElementById(i+"img").offsetWidth-(divwidth-dis))/50;
		}
		else
			len=(pos-nowpos)/50;
		animate(nowpos,len);
	}
	changeimg(document.getElementById(i+"img"));
}

function animate(nowpos,len)
{
	nowpos+=len;
	document.getElementById("preImg").scrollLeft=nowpos;
	ctr++;
	if(ctr<50)setTimeout(function()
	{
		animate(nowpos,len);
	},4)
	else
	{
		ctr=0;
	}
}

var music=2;

function changemusic()
{
	music=music+1;
	if(music>3)music=1;
	document.getElementById("aud").innerHTML="<source src='music/"+music+".mp3' type='audio/mpeg'>"
	document.getElementById("aud").load();
	document.getElementById("aud").play();
}

function stopmusic()
{
	if(document.getElementById("aud").paused)
		document.getElementById("aud").play();
	else
		document.getElementById("aud").pause()
}

var timer1;

function turnStart()
{
	if(isNaN(parseFloat(document.getElementById("changeTime").value)))return;
	else
	{
		var e=parseFloat(document.getElementById("changeTime").value);
		timer1=setInterval(
		function(){
			move(1);
		},e*1000);
		setTimeout(function(){
			clearInterval(timer1);
		}
		,e*1000*55)
	}
}

function turnStop()
{
	clearInterval(timer1);
}