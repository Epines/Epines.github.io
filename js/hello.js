	var inpText=document.getElementById("inpText");//文本框内容
	var main=document.getElementById("main");//许愿墙纸区域
	var container=document.getElementsByClassName("container")[0];
	container.style.height=(screen.height-80)+"px";
	// alert(screen.height);
	// var nav=document.getElementsByClassName("nav")[0];




	// 如果发布内容为空
	function ifNull(){
		if(inpText.value=="")
		{	
			var tips=document.createElement("span");
			main.appendChild(tips);
			tips.innerHTML="暂未输入任何内容，请输入后发布";
			tips.setAttribute("class","tips");
			setTimeout(function(){
				tips.parentNode.removeChild(tips);
			},1500)
			return 0;
		}
	}

	var state=false;
	//墙纸创建
	function upAll(){
		if(inpText.value=="")
		{	
			var tips=document.createElement("span");
			main.appendChild(tips);
			tips.innerHTML="暂未输入任何内容，请输入后发布";
			tips.setAttribute("class","tips");
			setTimeout(function(){
				tips.parentNode.removeChild(tips);
			},1500)
			return;
		}
		//生成一张心愿纸，并对类名命名为note，添加到心愿墙main上面，main的宽度为屏幕宽度，高度为800px;
		var notes=document.createElement("div");
		notes.setAttribute("class","note");
		main.appendChild(notes);
		// notes.style.zIndex=2;
		//创建一个p标签命为text，放在标签纸notes中
		var text=document.createElement("p");
		notes.appendChild(text);

		text.innerHTML=inpText.value;
		//创建一个关闭标签span，命名为pan
		var pan=document.createElement("span");
		notes.appendChild(pan);
		pan.setAttribute("class","pan");

		state=true;
        notes.onmousedown = function(ev){
            // var ev =window.event ||arguments[0];
            ev = ev || event;
            var a =ev.clientX-notes.offsetLeft;
            var b =ev.clientY-notes.offsetTop;
            notes.style.zIndex++;
   

           
            notes.onmousemove =function (ev){
                ev = ev || event;
                // var moveE=window.event||arguments[0];
                
	            console.log(a);
            	console.log(b);
                if(state==true){
                	notes.style.left =ev.clientX-a+'px';
                	notes.style.top =ev.clientY-b+'px';
                	 if(parseInt(notes.style.left)<30){
	            		notes.style.left ='30px';
		            }
		            if(parseInt(notes.style.left)>widthMax){
		            	notes.style.left =widthMax+'px';
		            }
		            if(parseInt(notes.style.top)<120){
		            	notes.style.top ='120px';
		            }
		            if(parseInt(notes.style.top)>500){
		            	notes.style.top ='500px';
		            }
                }
                
            }
            document.onmouseup =function(){
	        	notes.onmousemove =function(){
	           	 null;
	        	}
	        	// state=false;
	    	}
    	}    
        
       
	    


		// 获取焦点，更改层值
		// notes.onfocus=function(){
		// 	notes.style.zIndex=999;
		// }

		// notes.onblur=function(){
		// 	notes.style.zIndex=2;
		// }

		notes.onmouseover=function(){
			notes.style.zIndex=999;
			notes.style.cursor="move";
		}
		notes.onmouseout=function(){
			notes.style.zIndex=2;
		}


		// notes.onclick=function(){
		// 	notes.style.zIndex=999;
		// }

		//删除心愿纸
		pan.innerHTML="关闭";
		pan.onclick=function(){
			pan.parentNode.parentNode.removeChild(notes);
		}
		// alert(document.documentElement.clientWidth());


		//随机透明度
		// notes.style.opacity=randomBox(6,10)/10;
		// alert(notes.style.opacity);
		

		//screen.width 获取屏幕宽度
		// alert(screen.width);


		var widthMax=screen.width-550;

		notes.style.left=randomBox(30,widthMax)+"px";
		notes.style.top=randomBox(120,500)+"px";
		// notes.style.transform="rotate("+randomAngle()+"deg)";
		
		notes.style.backgroundColor=randomRgba();
		notes.style.transform="rotate("+randomAngle()+"deg)";
		// alert(randomAngle());

		inpText.value="";
		inpText.setAttribute("placeholder","编辑内容，点击回车键发布");

	}


	// function delete(){
	// 	var 
	// }


	//enter发送事件
	inpText.onkeydown=function(e){
		if(e.keyCode=="13")
		{
			ifNull();
			if(inpText.value){
				upAll();
				inpText.value="";
				inpText.setAttribute("placeholder","编辑内容，点击回车键发布");
			}
		}
	}




	//随机颜色
	function randomColor(){
		return "#"+Math.floor(Math.random()*"0xffffff").toString(16);
	}

	// function randomColor(){
	// 	var box="123456789abcedf";
	// 	var color="";
	// 	for(var i=0;i<6;i++)
	// 	{
	// 		var sub=Math.floor(Math.random()*15);
	// 		color+=box[sub];
	// 	}

	// 	return color;
	// }

	function randomRgba(){
		return "rgba("+randomBox(0,255)+","+randomBox(0,255)+","+randomBox(0,255)+","+randomBox(5,10)/10+")";
	}




	//随机位置
	function randomBox(max,min){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	//随机角度
	function randomAngle(){
		var pm=["+","-"];
		var count=Math.round(Math.random()*2);
		return pm[count]+randomBox(0,30);
	}
