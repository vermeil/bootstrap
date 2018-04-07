'use strict'

    $(".lbtn").mouseover(function(){//鼠标悬停触发事件
       $(this).children().next().css('display','block')
    }).mouseout(function(){
       $(this).children().next().css('display','none')
    }).click(function(){
        $(this).children().next().toggle()
    })


function getPos(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//被卷去的高度
    var clientHeight = document.documentElement.clientHeight ||document.body.clientHeight ;//可视区的高度
    return {scrollT:scrollTop, clientH:clientHeight};
}
var timer = null;
var H = getPos().clientH;
// up start
$(document).on('scroll',{name:'up'},function(){
    var T = getPos().scrollT;
    var up = $('.fixed');
        if(T==0){
            $("body,html").stop(true,true);
        }else if(T<600){
            up.fadeOut(500);
        }else{
            up.fadeIn(1000).click(function(){
                $("body,html").animate({scrollTop:0},1000);
                return false;
            });
        }
 });
// up end
//导航开始
$(function(){
    var navClass = document.getElementById('navClass');
      $(document).on('scroll',{name:'TOP'},function(){
        var T = getPos().scrollT;
         if(T>H/3){
            move(navClass,{opacity:70});
            navClass.className='navbar-inverse  navbar navbar-fixed-top';
        }else if(T<=H/3&&T>30){
            move(navClass,{opacity:70},function(){
                move(navClass,{opacity:100});
            });
            // 渐变效果
            navClass.className='navbar-default navbar navbar-fixed-top';
        }
    })
})
// 导航颜色 结束

$(function(){
var q = 0;
var oGett = document.getElementById('GetT');
var oSett = document.getElementById('SetT');

// var oArr =['这','一','生','需','要','历','经','多','少','场','巨','浪','风','波,','才','能','心','尖','造','王','国,','富饶','而','安','逸,','盛','大','而','静','默,','置','身','边','城','荒','漠,','也','有','那','无','名','花','一','朵','~','~','~'];
var str = "js中测试文字 标题";
var oArr = str.split('');
var str2 = "js中文字 内容";
var oArr2 = str2.split('');
$(document).on('scroll',{name:'TextT'},function(z){
    var MaxT = oSett.offsetTop - H;
    var T = getPos().scrollT;
        if(MaxT<T){
            // move(oSett,{opacity:100});
            // move(oGett,{opacity:100});
            textmove()
            $( this ).off( z );
        }
 });
// if(!!window.ActiveXObject || "ActiveXObject" in window){oSett.value='';}//为了iE 没法...
    function textmove(){
         clearInterval(timer);
         timer = setInterval(function(){
            var a1 = oArr.length;
            var a2 = oArr2.length;
            if(q < a1){
                oGett.innerHTML += oArr[q];
            }
            if(q < a2){
                oSett.innerHTML += oArr2[q];
            }else if(q>= Math.max(a1,a2)){
                clearInterval(timer);
            }
            q++;
        },120);
    }
})
//text文本 结束


//图片1
$(function(){
    var t = document.getElementsByClassName('timg')[0];
    // var tc = t.children;
    $(document).on('scroll',{name:'jqI'},function(z){
        var jqMax = t.offsetTop - H*4/5;
        var T = getPos().scrollT;
            if(jqMax<T) {
                // for (var i = tc.length - 1; i >= 0; i--){
                    // if(i+2%3 == 0){
                        move(t,{opacity:100,marginTop:0});
                    // }    
                // }
                // move(t[],{opacity:100,marginLeft:0},function(){
                //     move(ops,{opacity:100,marginLeft:0});
                // });
                $( this ).off( z );
            }
     })
});
//图片1 end;





//文本2开始
$(function(){
    var o = document.getElementsByClassName('otext')[0];
    var ops = document.getElementsByClassName('ops')[0];
    $(document).on('scroll',{name:'jqI'},function(z){
        var jqMax = o.offsetTop - H*3/5;
        var T = getPos().scrollT;
            if(jqMax<T){
                move(o,{opacity:100,marginLeft:0},function(){
                    move(ops,{opacity:100,marginLeft:0});
                });
                $( this ).off( z );
            }
     })
});
//文本2结束
$(function(){
    var p = document.getElementsByClassName('play')[0];

    $(document).on('scroll',{name:'jqI'},function(z){
        var jqMax = p.offsetTop - H*2/5;
        var T = getPos().scrollT;
            if(jqMax<T){
                move(p.children[0],{opacity:100,marginLeft:0});
                $( this ).off( z );
            }
     })
});

$(function(){
    var oDiv1 = document.getElementsByClassName('p_div1')[0];
    var btn = document.getElementsByClassName('p_btn')[0];
    var oUl   = oDiv1.getElementsByTagName('ul')[0];
    var aLi   = oUl.getElementsByTagName('li');
    var span  = -3;
        
    oUl.innerHTML+=oUl.innerHTML;

    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

    function pmove(){
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left=0;
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=-oUl.offsetWidth/2+'px';
        }
        oUl.style.left=oUl.offsetLeft+span+'px';
    }

    var timer=setInterval(pmove,30);
    oDiv1.onmouseover= function(){
        clearInterval(timer);
    }
    oDiv1.onmouseout= function(){
        timer=setInterval(pmove,30);
    }
    btn.children[0].onclick = function(){ span=-3;}
    btn.children[1].onclick = function(){ span= 3;}
})











// $(function(){
//     var che = 0;


// $(document).find('img').attr('draggable','false');
// $('#dImg').find('img').click(function(){
//     var hidleft=$(document).scrollLeft();
//     var hidtop=$(document).scrollTop();
//     var Iwidth=$('#dImg img').width()*1.3;
//     var Iheight=$('#dImg img').height()*1.3;
//     var li =  $(this).offset().left-($('#dImg ul').width()-$('#dImg img').width())/2;
//     var ti =  $(this).offset().top-($('#dImg ul').height()-$('#dImg img').height())/2-hidtop;
//     var lche =  $('#che').offset().left-hidleft;
//     var tche =  $('#che').offset().top-hidtop;
//        $(this).clone(true).insertAfter($(this)).css({
//             'pointer-events': 'none',
//             'position':'fixed',
//             'left':li,
//             'top':ti,
//             'width':Iwidth,
//             'height':Iheight,
//             'margin':'auto 0',
//             'opacity':'0.8',
//             'z-index':'233',
//         }).animate({
//             'left':lche,
//             'top':tche,
//             'width':'50',
//             'height':'50',
//             'border-radius':'50%'
//         },1000).hide(500,function(){
//             $(this).next().remove();
//             che++;
//             $('#che').html(che);
//         });
//     });
// });
//jq结束

//砖头来袭
// var zdivs =[];//用于存储所有的砖块div
// window.onload=function(){
//     var x =10;var y = 10;
//     var m = document.getElementsByClassName("target")[0];
//     for(var i=1;i<=9;i++){
//         for(var j=0;j<i;j++){
//             var di1 = document.createElement("span");
//             m.appendChild(di1);
//             di1.style.top = y+(i-1)*30+'px';
//             di1.style.left= x+300-i*40+j*75+'px';
//             zdivs[zdivs.length]=di1;}}}

// var HT1 = document.getElementsByClassName('html')[0];
// var HT2 = document.getElementsByClassName('html2')[0];
// var oBannerT = document.getElementsByClassName('bannerT')[0];//欢迎啊
// var oBanner =document.getElementById('banner');   //大框框
// // var oTop = document.getElementById('ban9ner');
// var oQmove = document.getElementsByClassName('qmove')[0];      //球球

// var oBottom = document.getElementsByClassName('bottom')[0];    //长条
// var oTarget = document.getElementsByClassName('target')[0];    //工头
// var zz = oTarget.getElementsByTagName('span');       //砖头们

//  $(document).on('scroll',{name:'jqI'},function( z ){
//         var jsMax = oBannerT.offsetTop - H*3/5;
//         var T = getPos().scrollT;
//             if(jsMax<T){
//                 oBanner.style.display='block';
//                 move(oBanner,{marginTop:50});
//                 $( this ).off( z );
//             }
//   });

// document.onkeydown = function(even){
//     HT1.style.display='block';
//     HT2.style.display='none';
//     var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
//     if(keyCode == 39){
//             oBottom.style.left = oBottom.offsetLeft+50+'px';
//             if(oBottom.offsetLeft>640 ){
//                 oBottom.style.left = 640 +"px";
//             }
//     }
//     if(keyCode == 37){
//             oBottom.style.left = oBottom.offsetLeft-50+'px';
//             if(oBottom.offsetLeft<0){
//                 oBottom.style.left = 0 +"px";
//             }
//     }
//     if(keyCode == 38||keyCode == 40)
//             return false;

//     if(keyCode == 32){
//             var zzzz = zz.length;
//             if(zzzz>44){
//             Qmove(oQmove);
//             }
//             return false;
//     }
// }

// function Qmove(obj){
//      var x = 3;
//      var y = -3;
//     clearInterval(timer);
//     timer = setInterval(function(){
   

//         var l = obj.offsetLeft;
//          //球在框框的宽度区间
//         var t = obj.offsetTop;
//          //球在框框的高度区间
//         var bmaxW = oBanner.offsetWidth-27;
//         //球在框框的宽度最大值
//         var bmaxH = oBanner.offsetHeight-27;
//         //球在框框的高度最大值
//         obj.style.left = obj.offsetLeft + x + "px";
//         l+=x;
//         if(0>=l){
//             x=-x;
//         }
//         if(l>=bmaxW){
//             x=-x;
//         }

//         obj.style.top = obj.offsetTop + y + "px";
//         t+=y;
//         if(t<=0){
//             y=-y;
//         }

//         var Btm = oBottom.offsetLeft-5;

//         var T = Math.abs(bmaxH-t);
//         var L = Btm-l;
//          // console.log(L+'L');
//          // console.log(T+'T');

//         if(T<=5.9){
//             if(L>=-75 && L<=25){
//                     y=-y;
//             }
//         }
//         //  if(t>=bmaxH){
//         //      y=-y;
//         // }
//         var HTI = document.getElementById('html');
//         for(var i=0 ; i<zz.length ;i++){
//             var z = L-zz[i].offsetLeft;
//             var zl = Math.abs((obj.offsetLeft-zz[i].offsetLeft-80)/2);
//             var zt = Math.abs((obj.offsetTop-zz[i].offsetTop-48)/2);
//             // var zzz = zl/54+zt/20;

//             //console.log(this);
//             if(zl<20 && zt<12){
//             // var ot = this.children;
//             // console.log(zl);
//             // console.log(zt+'gg');
//                     oTarget.removeChild(zz[i]);

//                   y=-y;
//               HTI.innerHTML=zz.length;
//             }
//             if(zz.length<=0){
//                 clearInterval(timer);
//                 HTI.innerHTML ="玄学";
//             }
//         }
//         if(t>=bmaxH+10){
//             clearInterval(timer);
//             HT1.innerHTML ="游戏结束";
//         }
//     },50/3)
// }
document.title = $('#mynavbar .active').text().replace('.','');
$(function(){
    var rb = $('.rootbtn');
    $('.logo-img').click(function(){
        rb.toggle()
    })
    var r = false;
    rb.click(function(){
        r = !r;
        document.body.contentEditable = r;
        if(r === true){
            $(this).html('开~~~~~~~``').addClass('btn-danger');
        }else{
            $(this).html('关~~~~~~~``').removeClass('btn-danger');
        }
        
    })
})

//砖头打完了