		var aLi = List.getElementsByTagName('li');
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		var str = zero(hours)+'d'+zero(minutes)+'d'+zero(seconds);
		
		for (var i=0;i<aLi.length;i++ )
		{	
			aLi[i].getElementsByTagName('img')[0].index = str.charAt(i);
			aLi[i].getElementsByTagName('img')[0].src = 'images/'+str.charAt(i)+'.png';			
			play( aLi[i],i );
		}
		function play( obj,index ){
			var num = 0;
			setInterval(function(){
				var date = new Date();
				var hours = date.getHours();
				var minutes = date.getMinutes();
				var seconds = date.getSeconds();
				var str2 = zero(hours)+'d'+zero(minutes)+'d'+zero(seconds);
				var aImg = obj.getElementsByTagName('img');

				//把之前的时间数字，做为自定义属性加在图片上，用来和现在的时间进行比较
				if ( str2.charAt(index) != aImg[num].index ) //之前的时间和现在的时间进行比较
				{
					move( aImg[num],{top:-61} );
					if ( num==1 )
					{
						aImg[num-1].src='images/'+str2.charAt(index)+'.png';
						aImg[num-1].index = str2.charAt(index);
						move( aImg[num-1],{top:0},500,'linear',function(){
							aImg[num].style.top = '61px';
							num--;
						} )
					}else{
						aImg[num+1].src='images/'+str2.charAt(index)+'.png';
						aImg[num+1].index = str2.charAt(index);
						move( aImg[num+1],{top:0},500,'linear',function(){
							aImg[num].style.top = '61px';
							num++;
						} );
					}
				}
			},1000);			
		};
		function zero( num ){
			return num<10?'0'+num:num;
		};