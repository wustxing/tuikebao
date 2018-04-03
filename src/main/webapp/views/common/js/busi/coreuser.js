// JavaScript Document
$(function () {
	$(".cur_postion").html("当前位置： [ "+sessionStorage.getItem("pmenuname")+" ] - [ "+sessionStorage.getItem("cmenuname")+" ]");

	//查询条件
	var strhtml_searchContent = '<div class="inline-block margin">'
		+'<span>帐户名称:</span>'
		+'<input type="text" class="inputStyle_condition crusrName"/>'
		+'<span>手机号码:</span>'
		+'<input type="text" class="inputStyle_condition crusrMobile"/>'
		+'<span>邀请码:</span>'
		+'<input type="text" class="inputStyle_condition crusrInviteCode"/>';
	$(".searchContent").html(strhtml_searchContent);
	//是否显示查询条件
	showSearchBox(true);

	var obj = {};//查询条件对象
	searchContent(obj);
	showList(obj,1);

	//详情
	$("body").delegate('.detailit','click', function(){
		layer.open({
			type: 2,
			title: '详情',
			scrollbar: false,
			maxmin: true,
			shadeClose: false, //点击遮罩关闭层
			area : [widthLayer , heightLayer],
			content: '../busi/coreuser_detail.html?id='+$(this).attr("data-id")+'&timestamp='+(new Date()).valueOf()
		});
	});
	//新增
	$('.addit').on('click', function(){
		layer.open({
			type: 2,
			title: '新增',
			scrollbar: false,
			maxmin: true,
			shadeClose: false, //点击遮罩关闭层
			area : [widthLayer , heightLayer],
			content: '../busi/coreuser_add.html?timestamp='+(new Date()).valueOf()
		});
	});
	//修改
	$("body").delegate('.modifyit','click', function(){
		layer.open({
			type: 2,
			title: '修改',
			scrollbar: false,
			maxmin: true,
			shadeClose: false, //点击遮罩关闭层
			area : [widthLayer , heightLayer],
			content: '../busi/coreuser_modify.html?id='+$(this).attr("data-id")+'&timestamp='+(new Date()).valueOf()
		});
	});
	//全选
	$("body").delegate("input[name='checkboxAll']","click",function(){
		if($(this).attr("checked")){
			$("input[name='checkbox']").each(function(){
				$(this).attr("checked",true);
			});
		}else{
			$("input[name='checkbox']").each(function(){
				$(this).removeAttr("checked");
			});
		}
	});

	//批量删除
	$("body").delegate(".delthese","click",function(){
		var ids = '';
		$("input[name='checkbox']").each(function(){
			if($(this).attr("checked")){
				ids += $(this).attr("data-id")+"|";
			}
		});
		if(ids == ""){
			alert("未选择删除对象！");
		}else{
			var r=confirm("是否确认删除所选的记录？");
			if (r==true){
				var str = 'crusrUuids='+encodeURIComponent(ids);
				getOData(str,"coreUser/delete/batch",{fn:function(oData){
						var obj = {};//查询条件对象
						searchContent(obj);
						pagenum = parseInt($(".curpage").text());
						isNull(obj,pagenum);
						alert("删除成功！");
					}}
				);
			}
		}
	});

	//删除
	$("body").delegate(".delit","click",function(){
		var r=confirm("是否确认删除？");
		if (r==true){
			var str = 'crusrUuid='+encodeURIComponent($(this).attr("data-id"));
			getOData(str,"coreUser/delete/one",{fn:function(oData){
					var obj = {};//查询条件对象
					searchContent(obj);
					pagenum = parseInt($(".curpage").text());
					isNull(obj,pagenum);
					alert("删除成功！");
				}}
			);
		}
	});
	//启用
	$("body").delegate(".publishit","click",function(){
		var r=confirm("是否确认启用？");
		if (r==true){
			var str = 'crusrUuid='+encodeURIComponent($(this).attr("data-id"));
			getOData(str,"coreUser/enable",{fn:function(oData){
					var obj = {};//查询条件对象
					searchContent(obj);
					pagenum = parseInt($(".curpage").text());
					isNull(obj,pagenum);
					alert("启用成功！");
				}}
			);
		}
	});
	//禁用
	$("body").delegate(".disableit","click",function(){
		var r=confirm("是否确认禁用？");
		if (r==true){
			var str = 'crusrUuid='+encodeURIComponent($(this).attr("data-id"));
			getOData(str,"coreUser/disable",{fn:function(oData){
					var obj = {};//查询条件对象
					searchContent(obj);
					pagenum = parseInt($(".curpage").text());
					isNull(obj,pagenum);
					alert("禁用成功！");
				}}
			);
		}
	});
	//重置密码
	$("body").delegate(".reset","click",function(){
		var r=confirm("是否确认重置？");
		if (r==true){
			var str = 'crusrUuid='+encodeURIComponent($(this).attr("data-id"));
			getOData(str,"coreUser/disable",{fn:function(oData){
					var obj = {};//查询条件对象
					searchContent(obj);
					pagenum = parseInt($(".curpage").text());
					isNull(obj,pagenum);
					alert("重置成功！");
				}}
			);
		}
	});
	//tr高亮显示
	$("body").delegate(".trHighLight","mouseleave",function(){
		$(this).find("td").css("background-color","#fff");
	});
	//tr高亮显示并显示图
	$("body").delegate(".trHighLight","mouseenter",function(){
		$(this).find("td").css("background-color","#c1ebff");
	});
	//查询
	$("body").delegate(".searchBtn","click",function(){
		var obj = {};//查询条件对象
		searchContent(obj);
		showList(obj,1);
	});
	//重置
	$("body").delegate(".resetBtn","click",function(){
		var obj = {};//查询条件对象
		$(".crusrName").val('');
		$(".crusrMobile").val('');
		$(".crusrInviteCode").val('');
		searchContent(obj);
		showList(obj,1);
	});
	//上一页
	$('.manageBox').delegate(".backpage","click", function() {
		var obj = {};//查询条件对象
		searchContent(obj);
		pagenum = parseInt($(this).attr("data-pagenum"));
		showList(obj,pagenum);
	});
	//下一页
	$('.manageBox').delegate(".nextpage","click", function() {
		var obj = {};//查询条件对象
		searchContent(obj);
		var pagenum = parseInt($(this).attr("data-pagenum"));
		showList(obj,pagenum);
	});
	//首页
	$('.manageBox').delegate(".firstpage","click", function() {
		var obj = {};//查询条件对象
		searchContent(obj);
		var pagenum = parseInt($(this).attr("data-pagenum"));
		showList(obj,pagenum);
	});
	//末页
	$('.manageBox').delegate(".lastpage","click", function() {
		var obj = {};//查询条件对象
		searchContent(obj);
		var pagenum = parseInt($(this).attr("data-pagenum"));
		showList(obj,pagenum);
	});
	//跳转至
	$('.manageBox').delegate(".jumppage","click", function() {
		var obj = {};//查询条件对象
		searchContent(obj);
		var pagenum = parseInt($('.jumppagetext').val());
		if(pagenum>0 && pagenum <=parseInt($(this).attr("data-pagemax"))){
			showList(obj,pagenum);
		}else{
			alert("查无此页！");
		}
	});

});
function showList(obj,pagenum){
	var aData =[{name:"<input type='checkbox' name='checkboxAll' value='checkbox' />",percent:"5"},
				{name:"帐户名称",percent:"15"},				
				{name:"手机号码",percent:"15"},
				{name:"等级名称",percent:"10"},				
				{name:"状态",percent:"10"},				
				{name:"最后登录时间",percent:"15"},				
				{name:"邀请码",percent:"10"},				
				{name:"操作",percent:"20"}];
	setTableHead(aData);
	var str = 'pageNum='+pagenum+'&pageSize=10&crusrName='+encodeURIComponent(obj.crusrName||"")+'&crusrMobile='+encodeURIComponent(obj.crusrMobile||"")+'&crusrInviteCode='+encodeURIComponent(obj.crusrInviteCode||"");
	getOData(str,"coreUser/find/by/cnd",{fn:function(oData){
		var strhtml_list = "";
		var arrData = oData.data.result;
		var ln = arrData.length;
		for(var i=0;i<ln;i++){
			strhtml_list += '<tr class="trHighLight">'
				+'<td>'+'<input type="checkbox" name="checkbox" value="checkbox" data-id="'+arrData[i].crusrUuid+'"/>'+'</td>'
				+'<td>'+(arrData[i].crusrName || "")+'</td>'
				+'<td>'+(arrData[i].crusrMobile || "")+'</td>'
				+'<td>'+(arrData[i].crusrGradeName || "")+'</td>'
				+'<td>'+(arrData[i].crusrStatus==0?"禁用":"启用" || "")+'</td>'
				+'<td>'+(arrData[i].crusrLastTime || "")+'</td>'
				+'<td>'+(arrData[i].crusrInviteCode || "")+'</td>'
				+'<td>'
				+'<a  class="p-edit detailit" data-id="'+arrData[i].crusrUuid+'">查看</a>';
				if( arrData[i].crusrStatus == 1){
					strhtml_list += '<a  class="p-edit disableit" data-id="'+arrData[i].crusrUuid+'">禁用</a>';
				}else{
					strhtml_list += '<a  class="p-edit publishit" data-id="'+arrData[i].crusrUuid+'">启用</a>';	
				}
				strhtml_list +='<a  class="p-edit reset" data-id="'+arrData[i].crusrUuid+'">重置密码</a>'
				+'</td>'
				+'</tr>';
		}
		$(".tb-body").html(strhtml_list);
		setTableFoot(oData.data,aData.length);
		}}
	);
}
function isNull(obj,pagenum){
	var str = 'pageNum='+pagenum+'&pageSize=10&crusrName='+encodeURIComponent(obj.crusrName||"")+'&crusrMobile='+encodeURIComponent(obj.crusrMobile||"")+'&crusrInviteCode='+encodeURIComponent(obj.crusrInviteCode||"");
	getOData(str,"coreUser/find/by/cnd",{fn:function(oData){
		var arrData = oData.data.result;
		var ln = arrData.length;
		if(ln == 0){
			if (oData.data.totalCount != 0 && pagenum !=1){
				showList(obj,pagenum-1);
			}else{
				showList(obj,1);
			}
		}else{
			showList(obj,pagenum);
		}
		}}
	);
}

function refreshList(){
	var obj = {};//查询条件对象
	searchContent(obj);
	showList(obj,parseInt($(".curpage").text()));
	layer.closeAll();
}

function searchContent(obj){
	obj.crusrName = $(".crusrName").val();
	obj.crusrMobile = $(".crusrMobile").val();
	obj.crusrInviteCode = $(".crusrInviteCode").val();
}
