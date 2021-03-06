// JavaScript Document
$(function () {
	initDetail();
});
//初始化
function initDetail(){
	getInfo(getQueryString("id"));
}
//获取详情
function getInfo(id){
	var str = 'bsbarUuid='+encodeURIComponent(id);
	getOData(str,"busiBanner/views",{fn:function(oData){
		if(oData.code == 1) {
			$(".bsbarLink").text(oData.data.bsbarLink || "");
			$(".bsbarOrd").text(oData.data.bsbarOrd || "");
			$(".bsbarStatus").text(oData.data.bsbarStatus==0?"禁用":"启用");
			$(".bsbarDesc").text(oData.data.bsbarDesc || "");
			getImageWidthHeight(urlfile+"/coreAttachment/image/get/"+oData.data.bsbarPic,function(realWidth,realHeight){
				var width = 750;
				var height = 460;
				if(realHeight>=height){
					width = realWidth/realHeight*height;
					$(".bsbarPic_preimg").css("width",width).css("height",height);
				}else{//如果小于浏览器的宽度按照原尺寸显示}
					$(".bsbarPic_preimg").css("width",realWidth+'px').css("height",realHeight+'px');
				}
				$(".bsbarPic_preimg").attr("src",urlfile+"/coreAttachment/image/get/"+oData.data.bsbarPic);
			});
		} else {
			alert(data.errMsg);
		}
	}});
}
