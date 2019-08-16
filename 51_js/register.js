/**
 * Created by keda208 on 2017/4/19.
 */
$(function(){
    $(".text-ui input").focus(function(){
        $(this).removeClass("error");
        $(this).parent().siblings(".r-focus").show();
        $(this).parent().siblings(".r-error").hide();
        $(this).parent().siblings(".r-error1").hide();
        $(this).parent().siblings(".r-errorPass").hide();
        $(this).parent().siblings(".r-empty").hide();

    });
    $(".text-ui input").blur(function(){
        $(this).parent().siblings(".r-focus").hide();
    });
    //用户名失去焦点时候验证
    $(".r-user").blur(function(){
        var reg=/^[\u4e00-\u9fa5a-zA-Z0-9]{6,20}$/;
        var str=$(this).val();
        if(str==""){
            $(this).removeClass("error");
            $(this).parent().siblings(".r-error").hide();
        }
        else if(!reg.test(str)){
            $(this).addClass("error");
            $(this).parent().siblings(".r-error").show();
        }else if(reg.test(str)){
            //用户名检测是否存在
            $.ajax({
                type:"POST",
                url:'php/register.php',
                data:{"user":str},
                success:function(list){
                    if(list=="succ"){
                        $(".r-success").show();
                    }else{
                        $(".r-user").addClass("error");
                        $(".r-user").parent().siblings(".r-error1").show();
                        console.log("存在");
                    }
                }
            })
        }
    })
//    密码验证
    $(".r-password").blur(function(){
        var reg=/^[0-9a-zA-Z]{6,12}$/;
        var reg1=/^[0-9]{6,12}$/;
        var reg2=/^[a-z]{6,12}$/;
        var str=$(this).val();
        if(str==""){
            $(this).removeClass("error");
            $(this).parent().siblings(".r-error").hide();
        }
        else if(!reg.test(str)){
            $(this).addClass("error");
            $(this).parent().siblings(".r-error").show();
            console.log("1");
        }else if(reg1.test(str)||reg2.test(str)){
            $(this).addClass("error");
            $(this).parent().siblings(".r-errorPass").show();
            console.log("2");
        }
    });
//    密码实时监听
    $(".r-password").bind('input propertychange', function(){
        var pass=$(this).val();
        if(pass==""){
            $(this).parent().siblings(".passQ").hide();
        }
    //    6-8位的数字和小写字母强度弱
        var reg1=/^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{6,8}$/;
        //    9-12位数字和小写字母为中
        var reg2=/^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{9,12}$/;
        //    6-8位数字小写字母大写字母为强
        var reg3=/^(?![0-9]+$)(?![a-z]+$)(?![0-9a-z]+$)[0-9a-zA-Z]{6,12}$/;
        var reg4=/^[0-9a-zA-Z]{6,12}$/
        if(reg1.test(pass)){
            $(this).parent().siblings(".r-focus").hide();
            $(this).parent().siblings(".passQ").show();
            $(this).parent().siblings(".passQ").children(".Q1").addClass("succQ1");
            $(this).parent().siblings(".passQ").children(".Q2").removeClass("succQ2");
            $(this).parent().siblings(".passQ").children(".Q3").removeClass("succQ3");

        }else if(reg2.test(pass)){
            $(this).parent().siblings(".passQ").children(".Q1").removeClass("succQ1");
            $(this).parent().siblings(".passQ").children(".Q3").removeClass("succQ3");
            $(this).parent().siblings(".r-focus").hide();
            $(this).parent().siblings(".passQ").show();
            $(this).parent().siblings(".passQ").children(".Q2").addClass("succQ2")
        }else if(reg3.test(pass)){
            $(this).parent().siblings(".passQ").children(".Q1").removeClass("succQ1");
            $(this).parent().siblings(".passQ").children(".Q2").removeClass("succQ2");
            $(this).parent().siblings(".r-focus").hide();
            $(this).parent().siblings(".passQ").show();
            $(this).parent().siblings(".passQ").children(".Q3").addClass("succQ3")
        }else if(!(reg1.test(pass))&&!(reg2.test(pass))&&!(reg3.test(pass))){
            $(this).parent().siblings(".r-focus").hide();
            $(this).parent().siblings(".passQ").hide();
            $(this).parent().siblings(".r-error").show();
            console.log("youwu");
        }



    })
//    再次输入密码验证
    $(".passAgain").blur(function(){
        var pass=$(".r-password").val();
        var passAg=$(this).val();
        if(passAg!=pass){
            $(this).parent().siblings(".r-focus").hide();
            $(this).addClass("error");
            $(this).parent().siblings(".r-error").show();
        }
    })
    $(".passAgain").bind('input propertychange', function(){
        var pass=$(".r-password").val();
        var passAg=$(this).val();
        if(passAg!=pass){
            $(this).parent().siblings(".r-focus").hide();
            $(this).addClass("error");
            $(this).parent().siblings(".r-error").show();
        }else{
            $(this).parent().siblings(".r-focus").hide();
            $(this).removeClass("error");
            $(this).parent().siblings(".r-error").hide();
        }
    })
//    邮箱验证
    $(".r-email").blur(function(){
        var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        var str=$(this).val();
        if(str==""){
            $(this).removeClass("error");
            $(this).parent().siblings(".r-error").hide();
        }
        else if(!reg.test(str)){
            $(this).addClass("error");
            $(this).parent().siblings(".r-error").show();
        }else{
            $(this).removeClass("error");
            $(this).parent().siblings(".r-error").hide();
        }
    })
//    提交
    function error(name){
        $(name).addClass("error");
        $(name).parent().siblings(".r-empty").show();
    }
    function error1(name){
        $(name).addClass("error");
        $(name).parent().siblings(".r-error").show();
    }
    $("#regBtn").click(function(){
        var user=$(".r-user").val();
        var pass=$(".r-password").val();
        var passAg=$(".passAgain").val();
        var email=$(".r-email").val();
        var regUser=/^[\u4e00-\u9fa5a-zA-Z0-9]{6,20}$/;
        var regEmail=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var regPass=/^[0-9a-zA-Z]{6,12}$/;
        var register = $("#regForm").serialize();//对class为register的from表单进行序列化
        if(user=="")
            error(".r-user");
        if(user!==""&&!regUser.test(user))
            error1(".r-user");
        if(pass=="")
        error(".r-password");
        if(pass!==""&&!regPass.test(pass))
            error1(".r-password");
        if(passAg=="")
            error(".passAgain");
        if(passAg!==""&&passAg!=pass)
            error1(".passAgain");
        if(email=="")
            error(".r-email");
        if(email!==""&&!regEmail.test(email))
            error1(".r-email");
        if((user!==""&&regUser.test(user))&&(pass!==""&&regPass.test(pass))&&(passAg!==""&&passAg==pass)&&(email!==""&&regEmail.test(email))){
            //都满足时候提交注册
            $.ajax({
                type:"POST",
                url:'php/register.php',
                data:{register:register},
                success:function(list){
                    if(list=="succ"){
                        window.open("login.html","_self")
                    }
                }
            })
        }
    })

})








