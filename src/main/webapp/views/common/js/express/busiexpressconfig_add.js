// JavaScript Document
$(function () {
	initAdd();
	//提交
	$(".submit").on("click",function(){
		checkAdd();
	});
});
//初始化
function initAdd(){
	$(".bsecgKdnCode").val("");
	$(".bsecgApiKey").val("");
	$(".bsecgCdate").val("");
	$(".bsecgUdate").val("");
	/*CKEDITOR.replace( 'crcseContent' , { height: '240px', 
		width: '480px',
		toolbar: [[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', 'Bold',
						'Italic',"Format","FontSize","TextColor" ,"CodeSnippet","Table"]],
		extraPlugins: 'codesnippet',
		uiColor: '#f3f3f3'
	} );*/
}
//检查提交
function checkAdd(){
	if($.trim($(".bsecgKdnCode").val()) == ""){
		alert("商户标识不能为空，请填写完再提交！");
		$(".bsecgKdnCode").focus();
		return false;
	}
	if($.trim($(".bsecgApiKey").val()) == ""){
		alert("API_KEY不能为空，请填写完再提交！");
		$(".bsecgApiKey").focus();
		return false;
	}
	if($.trim($(".bsecgCdate").val()) == ""){
		alert("创建时间不能为空，请填写完再提交！");
		$(".bsecgCdate").focus();
		return false;
	}
	if($.trim($(".bsecgUdate").val()) == ""){
		alert("更新时间不能为空，请填写完再提交！");
		$(".bsecgUdate").focus();
		return false;
	}
	/*if($.trim(CKEDITOR.instances.crcseContent.getData()) == ""){
		alert("内容不能为空，请填写完再提交！");
		return false;
	}*/

	var r=confirm("是否确认增加？");
	if (r==true){
		var msgObject = parent.layer.msg('处理中，请等待……', {
			icon: 16,
			shade: 0.4,
			time: waitImgTime //（如果不配置，默认是3秒）
		}, function(index){
			//do something
			parent.layer.close(index);
		});
		Add(msgObject);
	}
}
//提交
function Add(msgObject){
	var bsecgKdnCode = $(".bsecgKdnCode").val();
	var bsecgApiKey = $(".bsecgApiKey").val();
	var bsecgCdate = $(".bsecgCdate").val();
	var bsecgUdate = $(".bsecgUdate").val();
	var str = 'bsecgKdnCode='+encodeURIComponent(bsecgKdnCode)+'&bsecgApiKey='+encodeURIComponent(bsecgApiKey)+'&bsecgCdate='+encodeURIComponent(bsecgCdate)+'&bsecgUdate='+encodeURIComponent(bsecgUdate);
	getOData(str,"busiExpressConfig/add/busiExpressConfig",{
		fn:function(oData){
			window.parent.refreshList();
			alert("增加成功！");
		},
		fnerr:function(oData){
			parent.layer.close(msgObject);
		}
	});
}