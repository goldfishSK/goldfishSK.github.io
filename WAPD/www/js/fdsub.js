$(function() {


    //     手机号
    $("#phoneNum").blur(function() {
        var phone = document.getElementById('phoneNum').value;
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            $("#phoneNum").parents(".form-group").find(".tishi").text("手机号码有误，请重填");
            return false;
        } else {
            $("#phoneNum").parents(".form-group").find(".tishi").text("");

        }
    });
    //   账号位数
    $("#username").blur(function() {
        if ($("#username").val().length < 6) {
            $("#username").parents(".form-group").find(".tishi").text("账号不能小于6位数");
        } else {
            $("#username").parents(".form-group").find(".tishi").text("");

        }
    });
    //   密码检测
    $("#password").blur(function() {
        if ($("#password").val().length < 6) {
            $("#password").parents(".form-group").find(".tishi").text("密码不能少于6位数");

        } else {
            if ($("#password").val() == "112233" || $("#password").val() == "123123" || $("#password").val() ==
                "123456789") {
                $("#password").parents(".form-group").find(".tishi").text("密码不能过于简单");
            }

        }
    });


})