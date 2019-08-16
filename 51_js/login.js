/**
 * Created by keda208 on 2017/4/19.
 */
$(function(){


        $(".l-user").focus(function() {
                $(".l-user").removeClass("error");
                $(".error-empty-user").hide();
                $(".l-pass").removeClass("error");
                $(".error-empty-email").hide();
            $(".error-empty-all").hide();

        });
    $(".l-pass").focus(function() {
        $(".l-user").removeClass("error");
        $(".error-empty-user").hide();
        $(".l-pass").removeClass("error");
        $(".error-empty-email").hide();
        $(".error-empty-all").hide();

    });

    blur(".l-user",".l-pass");
    function blur(elem,elem1){
        $(elem).blur(function() {
            if ($(elem).val() == "" && $(elem1).val() != "") {
                $(elem).addClass("error");
                $(".error-empty-user").show();
            }else if ($(elem).val()!= "" && $(elem1).val() != "") {
                $(elem).removeClass("error");
                $(".error-empty-user").hide();
            }
        })
            $(elem1).blur(function() {
                if ($(elem).val() != "" && $(elem1).val() == "") {
                    $(elem1).addClass("error");
                    $(".error-empty-email").show();
                }else if ($(elem).val() != "" && $(elem1).val()!= "") {
                    $(elem1).removeClass("error");
                    $(".error-empty-email").hide();
                }
            })
        }


//    点击登录按钮
    $("#loginBtn").click(function(){
       var user= $(".l-user").val();
        var pass=$(".l-pass").val();
        var check=$("#logCheck").is(":checked");
        console.log(check);
        if($.trim(user)==""&&$.trim(pass)!=""){
            $(".l-user").addClass("error");
            $(".error-empty-user").show();
        }else if($.trim(user)!=""&&$.trim(pass)==""){
            $(".l-pass").addClass("error");
            $(".error-empty-email").show();
        }else if($.trim(user)==""&&$.trim(pass)==""){
            $(".l-pass").addClass("error");
            $(".l-user").addClass("error");
            $(".error-empty-all").show();
            console.log("ni");
        }else if($.trim(user)!=""&&$.trim(pass)!=""&&check==false){
            //没有勾选记住用户名就提交登录的ajax
            $.ajax({
                type:"post",
                url:'php/register.php',
                data:{user:user,pass:pass},
                success:function(list){
                    console.log("cg");
                    if(list=="succ"){
                        window.open("index.html","_self");
                        console.log("没有勾选");
                        sessionStorage.setItem("user",user);

                    }else if(list=="err"){
                        console.log("lll");
                        $(".error-user").show();
                    }
                }
            })
        }
        else if(user!=""&&pass!=""&&check==true){
            //勾选记住用户名并提交登录的ajax
            $.ajax({
                type:"post",
                url:'php/register.php',
                data:{user:user,pass:pass},
                success:function(list){
                    if(list=="succ"){
                        console.log("勾选了");
                        sessionStorage.setItem("user",user);
                        sessionStorage.setItem("pass",pass);
                        window.open("index.html","_self");
                    }else{
                        $(".error-user").show();
                    }
                }
            })
        }
    })



})









