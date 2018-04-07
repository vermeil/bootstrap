function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

// function startMovez(obj, attr, iTarget)
// {
// 	clearInterval(obj.timer);
// 	obj.timer=setInterval(function (){
// 		var cur=0;
// 		if(attr=='opacity')
// 		{
// 			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
// 		}
// 		else
// 		{
// 			cur=parseInt(getStyle(obj, attr));
// 		} 
		
// 		var speed =(iTarget*2-cur)/20;
		
		
// 		//var speed =Math.abs((cur-iTarget)/10);
				
// 		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		
// 		if(cur==iTarget)
// 		{
// 			clearInterval(obj.timer);
// 		}
// 		else
// 		{
// 			if(attr=='opacity')
// 			{
// 				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
// 				obj.style.opacity=(cur+speed)/100;
// 			}
// 			else
// 			{
// 				obj.style[attr]=cur+speed+'px';
// 			}
// 		}
// 	}, 1000/30);
// }

function move(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var Stop = true;
		
		for(var attr in json){
		
		var cur = 0;
		
			if(attr == 'opacity'){
				cur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			//var speed =(json[attr]*2-cur)/20;	
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur != json[attr])
				Stop=false;
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(Stop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	}, 30);
}
