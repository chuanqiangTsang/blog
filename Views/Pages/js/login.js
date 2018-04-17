// 20180416 By John
$(function(){
	$('#submitBtn').click(function(){
		$('#loginForm').validate({
		rules: {
			loginName: {
				required: true
			},
			password: {
				required: true
			}
		},
		messages: {
			loginName: {
				required: '登录名不能为空'
			},
			password: {
				required: '密码不能为空'
			}
		},
		submitHandler: function(){
			var ajaxData = {
				loginName: $('#loginName').val().trim(),
				password: $.md5($('#password').val() + 'blog')
			}

			$.ajax({
				url: '/doLogin',
				type: 'post',
				data: ajaxData
			}).done(function(data){
				if(data.State === true){
					window.location.href = "/";
				}else{
					alert(data.Msg);
				}
			});
		}
		})
	})
	
})