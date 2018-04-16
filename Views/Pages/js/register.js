// 20180412 By John
$(function(){
	var isLogin = true;
	// 检验是否重复注册
	$('#email').blur(function(){
		checkRepeatUsers('email', $(this).val(), function(data){
			isLogin = data;
		})
	})

	$('#loginName').blur(function(){
		isLogin = checkRepeatUsers('loginName', $(this).val(), function(data){
			isLogin = data;
		})
	})

	$('#nickName').blur(function(){
		isLogin = checkRepeatUsers('nickName', $(this).val(), function(data){
			isLogin = data;
		})
	})

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
				email: $('#email').val().trim(),
				loginName: $('#loginName').val().trim(),
				nickName: $('#nickName').val().trim(),
				password: $.md5($('#password').val() + 'blog'),
			}
			if(isLogin){
				$.ajax({
				url: '/doRegister',
				type: 'post',
				data: ajaxData
			}).done(function(data){
				if(data.State === true){
					// 暂时跳转到登录
					window.location.href = '/login'

				}
			})
			}
		}
	})

	// 定义总函数
	function checkRepeatUsers(type, value, cb){
		if(type === 'email'){
			$.ajax({
			url: '/doCheckUser',
			type: 'post',
			data: { email: value}
			}).done(function(data){
				if(data.State === false){
					$('#email').siblings('span.err-msg').show().text('邮箱已被注册');
					cb(false);
				}else{
					$('#email').siblings('span.err-msg').hide().text('');
					cb(true);	
				}
			});
		}

		if(type === 'loginName'){
			$.ajax({
			url: '/doCheckUser',
			type: 'post',
			data: { loginName: value}
			}).done(function(data){
				if(data.State === false){
					$('#loginName').siblings('span.err-msg').show().text('登录名已被注册');
					cb(false);
				}else{
					$('#loginName').siblings('span.err-msg').hide().text('');
					cb(true);	
				}
			});
		}

		if(type === 'nickName'){
			$.ajax({
			url: '/doCheckUser',
			type: 'post',
			data: { nickName: value}
			}).done(function(data){
				if(data.State === false){
					$('#nickName').siblings('span.err-msg').show().text('登录名已被注册');
					cb(false);
				}else{
					$('#nickName').siblings('span.err-msg').hide().text('');	
					cb(true);
				}
			});
		}
	}
})

// 自定义校验邮箱
jQuery.validator.addMethod("checkEmail", function(value, element){
	var email = value;
	var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	return reg.test(email);
})

