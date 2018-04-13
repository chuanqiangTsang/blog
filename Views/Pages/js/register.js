// 20180412 By John
$(function(){
	$('#registerForm').validate({
		rules: {
			email: {
				required: true,
				checkEmail: true
			},
			loginName: {
				required: true,
				minlength: 6
			},
			nickName: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6
			},
			confirmPassword: {
				required: true,
				equalTo: '#password'
			},
		},
		messages: {
			email: {
				required: '邮箱不能为空',
				checkEmail: '请输入正确格式的邮箱'
			},
			loginName: {
				required: '登录名称不能为空',
				minlength: '登录名称最少包含6个字符'
			},
			nickName: {
				required: '显示名称不能为空',
				minlength: '显示名称不能少于两个汉字或字母'
			},
			password: {
				required: '密码不能为空',
				minlength: '密码不能少于6位'
			},
			confirmPassword: {
				required: '确认密码不能为空',
				equalTo: '两次密码输入不一致'
			},
		},
		submitHandler: function(){
			// 整理参数
			var ajaxData = {
				email: $('#email').val(),
				loginName: $('#loginName').val(),
				nickName: $('#nickName').val(),
				password: $('#password').val(),
			}
			$.ajax({
				url: '/doRegister',
				type: 'post',
				data: ajaxData
			}).done(function(data){
				if(data.State === true){
					alert('恭喜注册成功！');
					// todo
				}
			})
		}
	})
});


// 自定义校验邮箱
jQuery.validator.addMethod("checkEmail", function(value, element){
	var email = value;
	var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	return reg.test(email);
})

