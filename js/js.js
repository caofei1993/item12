

window.onload = function () {
    var box5 = document.getElementById("box5");
    var box4 = document.getElementById("box4");
    var oUl = document.getElementById("oUl");
    var oli = oUl.getElementsByTagName("li");
    var oPicBox = document.getElementById('picBox');
    var oPicUl = oPicBox.getElementsByTagName('div')[0];
    var aLi = oPicUl.getElementsByTagName('div');
    var oPicBox1 = document.getElementById('picBox1');
    var oPicUl1 = oPicBox1.getElementsByTagName('div')[0];
    var aLi1 = oPicUl1.getElementsByTagName('div');
    var oPicBox2 = document.getElementById('picBox2');
    var oPicUl2 = oPicBox2.getElementsByTagName('div')[0];
    var aLi2 = oPicUl2.getElementsByTagName('div');
    var oPicBox3 = document.getElementById('picBox3');
    var oPicUl3 = oPicBox3.getElementsByTagName('div')[0];
    var aLi3 = oPicUl3.getElementsByTagName('div');
    var oPicBox4 = document.getElementById('picBox4');
    var oPicUl4 = oPicBox4.getElementsByTagName('div')[0];
    var aLi4 = oPicUl4.getElementsByTagName('div');
    var oPicBox5 = document.getElementById('picBox5');
    var oPicUl5 = oPicBox5.getElementsByTagName('div')[0];
    var aLi5 = oPicUl5.getElementsByTagName('div');
    var oPicBox6 = document.getElementById('picBox6');
    var oPicUl6 = oPicBox6.getElementsByTagName('div')[0];
    var aLi6 = oPicUl6.getElementsByTagName('div');
    var oPicBox7 = document.getElementById('picBox7');
    var oPicUl7 = oPicBox7.getElementsByTagName('div')[0];
    var aLi7 = oPicUl7.getElementsByTagName('div');
    var right4 = document.getElementById('right4');
    var pic1 = document.getElementById('pic1');
    var box = right4.getElementsByTagName("ul");
    var p7 = document.getElementById("p7");
    var pic = document.getElementById("pic");
    var i = 0;
    var j = 0;
    var timer = null;
    timer = setInterval(function(){
                i = i+180;
                 pic.style.transform = "rotate("+i+"deg)"
    },5000)
    setInterval(function () {
        var mydate = new Date();
        var end_time = new Date(2017,8,10,23,59,59);
        var h = mydate.getHours();
        var y = mydate.getFullYear();
        var m = mydate.getMonth()+1;
        var d = mydate.getDate();
        var mydate1 = new Date(y,m,d,10,00,00);
        var mydate2 = new Date(y,m,d,13,00,00);
        var mydate3 = new Date(y,m,d,17,00,00);
        var mydate4 = new Date(y,m,d+1,10,00,00);
        if(end_time-mydate!=0){
            if(h<10){
                var t =(mydate1 - mydate)/1000;
            }else if(h>=10 &&h<13){
                var t =(mydate2 - mydate)/1000;
            }else if(h>=13 &&h<17){
                var t =(mydate3 - mydate)/1000;
            }else if(h>=17){
                var t =(mydate4 - mydate)/1000;
            }
            var time1 =Math.floor((t%86400)/3600);
            var time2 =Math.floor((t%3600)/60);
            var time3 =Math.floor(t%60);
            p7.innerHTML = "据下次整点抢购开始还有"+"<span style='color: #f6555c'>"+time1+"</span>"+"时"+"<span style='color: #f6555c'>"+time2+"</span>"+"分"+"<span style='color: #f6555c'>"+time3+"</span>"+"秒"
        }
    },1000)


    oli[0].className = "active"+0;
    box[0].style.display ="block";
    for(var i = 0;i<oli.length;i++){
        oli[i].index =i;
        oli[i].onclick = function () {
            for(var j = 0;j<oli.length;j++){
                oli[j].className ="";
                box[j].style.display="none";
            };
            box[this.index].style.display = "block";
            this.className = "active"+[this.index]
        }
    }
    move(pic1,"left",264);
    move(box5,"left",773);
    set(oPicUl,aLi,oPicBox,10000);
    set(oPicUl1,aLi1,oPicBox1,6000);
    set(oPicUl2,aLi2,oPicBox2,10000);
    set(oPicUl3,aLi3,oPicBox3,6000);
    set(oPicUl4,aLi4,oPicBox4,10000);
    set(oPicUl5,aLi5,oPicBox5,6000);
    set(oPicUl6,aLi6,oPicBox6,10000);
    set(oPicUl7,aLi7,oPicBox7,6000);
   function set(obj1,obj2,obj3,a) {
       obj1.innerHTML +=obj1.innerHTML;
       var len = obj2.length;
       var num = -1;
       var timer = null;
       var str = '';
       function next(){
           if(num==len/2)
           {
               num=1;
               obj1.style.left = 0;
           }
           else
           {
               num++;
           };

           move(obj1,'left',-(num*292));
       };
       next();
       timer = setInterval( next,a );
       obj3.onmouseover = function()
       {
           clearInterval( timer );
       };
       document.body.onblur=function(){
           clearInterval( timer );
       }
       document.body.onfocus=function(){
           timer = setInterval( next,a );
       }
       obj3.onmouseout = function()
       {
           timer = setInterval( next,a );
       };
   }





};
