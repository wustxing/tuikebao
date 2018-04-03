// JavaScript Document
$(function () {
	initModify();
	//提交
	$(".submit").on("click",function(){
		checkModify();
	});
});
//初始化
function initModify(){
	$(".bscaeCategory").val("");
	$(".bscaeName").val("");
	$(".bscaeOrd").val("");
	$(".bscaeCdate").val("");
	$(".bscaeUdate").val("");
	/*CKEDITOR.replace( 'crcseContent' , { height: '240px', 
		width: '480px',
		toolbar: [[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', 'Bold',
						'Italic',"Format","FontSize","TextColor" ,"CodeSnippet","Table"]],
		extraPlugins: 'codesnippet',
		uiColor: '#f3f3f3'
	} );*/
	getInfo(getQueryString("id"));
}
//获取详情
function getInfo(id){
	var str = 'bscaeUuid='+encodeURIComponent(id);
	getOData(str,"busiCategoryAttribute/views",{fn:function(oData){
		if(oData.code == 1) {
			$(".bscaeCategory").val(oData.data.bscaeCategory || "");
			$(".bscaeName").val(oData.data.bscaeName || "");
			$(".bscaeOrd").val(oData.data.bscaeOrd || "");
			$(".bscaeCdate").val(oData.data.bscaeCdate || "");
			$(".bscaeUdate").val(oData.data.bscaeUdate || "");
			//CKEDITOR.instances.crcseContent.setData(oData.data.crcseContent);
		} else {
			alert(data.errMsg);
		}
	}});
}

//检查提交
function checkModify(){
	if($.trim($(".bscaeCategory").val()) == ""){
		alert("分类标识不能为空，请填写完再提交！");
		$(".bscaeCategory").focus();
		return false;
	}
	if($.trim($(".bscaeName").val()) == ""){
		alert("属性名称不能为空，请填写完再提交！");
		$(".bscaeName").focus();
		return false;
	}
	if($.trim($(".bscaeOrd").val()) == ""){
		alert("显示顺序不能为空，请填写完再提交！");
		$(".bscaeOrd").focus();
		return false;
	}
	if($.trim($(".bscaeCdate").val()) == ""){
		alert("创建时间不能为空，请填写完再提交！");
		$(".bscaeCdate").focus();
		return false;
	}
	if($.trim($(".bscaeUdate").val()) == ""){
		alert("更新时间不能为空，请填写完再提交！");
		$(".bscaeUdate").focus();
		return false;
	}
	/*if($.trim(CKEDITOR.instances.crcseContent.getData()) == ""){
		alert("内容不能为空，请填写完再提交！");
		return false;
	}*/

	var r=confirm("是否确认修改？");
	if (r==true){
		var msgObject = parent.layer.msg('处理中，请等待……', {
			icon: 16,
			shade: 0.4,
			time: waitImgTime //（如果不配置，默认是3秒）
		}, function(index){
			//do something
			parent.layer.close(index);
		});
		Modify(msgObject);
	}
}
//提交
function Modify(msgObject){
	//var crcseContent = CKEDITOR.instances.crcseContent.getData();
	var bscaeUuid = getQueryString("id");
	var bscaeCategory = $(".bscaeCategory").val();
	var bscaeName = $(".bscaeName").val();
	var bscaeOrd = $(".bscaeOrd").val();
	var bscaeCdate = $(".bscaeCdate").val();
	var bscaeUdate = $(".bscaeUdate").val();
	var str = 'bscaeUuid='+encodeURIComponent(bscaeUuid)+'&bscaeCategory='+encodeURIComponent(bscaeCategory)+'&bscaeName='+encodeURIComponent(bscaeName)+'&bscaeOrd='+encodeURIComponent(bscaeOrd)+'&bscaeCdate='+encodeURIComponent(bscaeCdate)+'&bscaeUdate='+encodeURIComponent(bscaeUdate);
	getOData(str,"busiCategoryAttribute/update/busiCategoryAttribute",{
		fn:function(oData){
			window.parent.refreshList();
			alert("修改成功！");
		},
		fnerr:function(oData){
			parent.layer.close(msgObject);
		}
	});
}