/**
 * Created by keda208 on 2017/3/11.
 */
$(function(){

//    我的登录注册弹出框
    $("#logRegBox").hover(
        function(){
            $("#loginReg").fadeIn(30);
        },function(){
            setTimeout(function(){
                $("#loginReg").hide();
            },1000);
        }
    );
    //if(sessionStorage.getItem("user")!=""){
    //    $("#myCenterBox").css("display","inline-block");
    //    $("#logRegBox").hide();
    //}
//    我的登录成功后的弹框
    $("#myCenterBox").hover(
        function(){
            $("#myCenter").fadeIn(30);
        },function(){
            setTimeout(function(){
                $("#myCenter").hide();
            },1000);
        }
    );



// 市场分类弹出框
    $("#classifyImg").hover(
        function(){
            $("#classifyBox").fadeIn(30);
        },function(){
            setTimeout(function(){
                $("#classifyBox").hide();
            },1000);
        }
    );

//    为导航栏点击后添加下划线
    $(".nav_click").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.addClass("nav_active");
        }
    });
    $(".what_bai").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){
            $this.addClass("selected");
        }
    });

//  返回顶部
    scroll();
    function scroll(){
        var oRTT=document.getElementById("goTop");
        var pH=document.documentElement.clientHeight;
        var timer=null;
        var scrollTop;
        window.onscroll=function(){
            scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            return scrollTop;
        }
        oRTT.onclick=function(){
            clearInterval(timer);
            timer=setInterval(function(){
                var now=scrollTop;
                var speed=(0-now)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(scrollTop==0){
                    clearInterval(timer);
                }
                document.documentElement.scrollTop=scrollTop+speed;
                document.body.scrollTop=scrollTop+speed;
            },30);
        }
    }

})





