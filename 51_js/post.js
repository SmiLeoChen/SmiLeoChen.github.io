/**
 * Created by keda208 on 2017/4/6.
 */
$(function(){

//    充值弹框的关闭按钮
    $("#rechargeClose").click(function(){
        $("#rechargeBox").fadeOut(300);
    });
    $("#postRecharge").click(function(){
        $("#rechargeBox").fadeIn(300);
    });
//    预览图片
    $("#lumpButton").click(function(){
        $(this).next().click();
    });
    $("#lumpFile").change(function(){
        var file=$(this).val();
        if(file==''){
            //设置默认图片
           $("#myimg").attr("src",'img/zanwu.png');
        }else if(!/\.(jpg|png|JPG|PNG)$/.test(file)){
            alert("图片类型必须是.jpg,png中的一种")
            return false;
        }else if(file!=""){
            preImg("lumpFile","myimg");
        }
    });
    //定义id选择器
    function Id(id){
        return document.getElementById(id);
    }
    //获取input[file]图片的url Important
    function getFileUrl(fileId) {
        var url;
        var file = Id(fileId);
        var agent = navigator.userAgent;
        if (agent.indexOf("MSIE")>=1) {
            url = file.value;
        } else if(agent.indexOf("Firefox")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        } else if(agent.indexOf("Chrome")>0) {
            url = window.URL.createObjectURL(file.files.item(0));
        }
        return url;
    }
    //读取图片后预览
    function preImg(fileId,imgId) {
        var imgPre =Id(imgId);
        imgPre.src = getFileUrl(fileId);
    }
//    预览图片结束

    //详情介绍
    $("#postIntro").blur(function(){
        if($.trim($("#postIntro").val())!=''){
            $(this).next().css("display","none");
        }
    });
//    格子名称验证
    $("#gridName").focus(function() {
        $("#fridError").hide();
        $("#fridEmpty").hide();
        $("#fridFocus").fadeIn(300);
    });
    $("#gridName").blur(function(){
        var reg=/^[\u4e00-\u9fa5a-zA-Z]{1,6}$/;
        var val=$(this).val();
        if($.trim(val)!=""){
            if(!reg.test($.trim(val))) {
                $("#fridFocus").hide();
                $("#fridError").fadeIn(300);
            }
        }else{
            $("#fridFocus").hide();
        }
    })
//    链接网址验证
    $("#linkUrl").focus(function(){
       $("#urlError").hide();
        $("#urlEmpty").hide();
    });
    $("#linkUrl").blur(function(){
        var reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        var val=$(this).val();
        if($.trim(val)!=""){
            if(!reg.test($.trim(val))){
                $("#urlError").fadeIn(300);
            }
        }

    });
//    详情介绍验证
    $("#postIntro").focus(function(){
        $("#textareaTxt").hide();
        $("#textareaEmpty").hide();
    });
    $("#postIntro").blur(function(){
        var reg=/^[\u4e00-\u9fa5a-zA-Z0-9]{1,140}$/;
        var val=$(this).val();
        if($.trim(val)!=""){
            if(!reg.test($.trim(val))) {
                $("#textareaTxt").fadeIn(300);
            }
        }
    });
//    点击发布
    function empty(val,name,reg){
        if(val==""){
            console.log("Kong ");
            $(name).siblings(".frid-error").fadeIn(300);
        }else if(val==undefined){
            console.log("Kong1 ");
            $(name).parents(".post_lump").find(".frid-error").fadeIn(300);
        }
        else if($.trim(val)!=""){
            if(!reg.test(val)){
                $(name).siblings(".frid-error").hide();
                $(name).siblings(".frid-error1").fadeIn(300);
            }else{
                $(name).siblings(".frid-error").hide();
                $(name).siblings(".frid-error1").hide();
            }
        }

    }
    function emptyN(val,name) {
        if (val == "") {
            $(name).siblings(".frid-error").fadeIn(300);
        } else if (val == undefined) {
            $(name).parents(".post_lump").find(".frid-error").fadeIn(300);
        }else if(val!=undefined){
            $(name).parents(".post_lump").find(".frid-error").hide();
        }
    }
    $("#postIssue").click(function(){
        var reg1=/^[\u4e00-\u9fa5a-zA-Z]{1,6}$/;
        var reg2=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        var reg3=/^[\u4e00-\u9fa5a-zA-Z0-9]{1,140}$/;
        var val1= $("#gridName").val();
        var val2= $("#linkUrl").val();
        var val3=$("#postIntro").val();
        var val4=$("#antistopAdd").val();
        var val5=$('input:radio[name="postLei"]:checked').val();
        var val6=$('input:radio[name="odds"]:checked').val();
        var val7=$('input:radio[name="postNum"]:checked').val();
        var val8=$('input:radio[name="postDay"]:checked').val();
        empty(val1,"#gridName",reg1);
        empty(val2,"#linkUrl",reg2);
        empty(val3,"#postIntro",reg3);
        emptyN(val4,"#antistopAdd");
        emptyN(val5,'input:radio[name="postLei"]');
        emptyN(val6,'input:radio[name="odds"]');
        emptyN(val7,'input:radio[name="postNum"]');
        emptyN(val8,'input:radio[name="postDay"]');
        var val9=$('input[name="file"]').prop('files').length;
        var register = $("#postForm").serialize();//对class为register的from表单进行序列化
        console.log(val9);
        if(val9==0){
            $('input[name="file"]').siblings(".frid-error").fadeIn(300);
        }else{
            var val9=$('input[name="file"]').prop('files')[0].name;
        }
        if((val1!==""&&reg1.test(val1))&&(val2!==""&&reg2.test(val2))&&(val3!==""&&reg3.test(val3))&&(val4!=="")&&(val5!=undefined)&&(val6!=undefined)
            &&(val7!=undefined)&&($('input[name="file"]').prop('files').length!=0)){
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
});




