function getInput1() {
	var a = $('#bill[type=checkbox]').is(':checked');
	console.log(a);
	if($('#bill[type=checkbox]').is(':checked') == true) {
		$("#invoice_type").removeAttr("disabled");
		$("#invoice_type").css("color", "#000");
	}
	if($('#bill[type=checkbox]').is(':checked') == false) {
		$("#invoice_type").attr("disabled", "disabled");
		$("#invoice_type").css("color", "#999");
	}

};

function personal() {
	if($("#personal[type=checkbox]").is(":checked") == true) {
		document.getElementById("company").checked = false;
		$(".invoice_header").hide();
	}
}

function company() {
	if($("#company[type=checkbox]").is(":checked") == true) {
		document.getElementById("personal").checked = false;
		$(".invoice_header").show();

	}
}

$("#invoice_type").change(function() {
	calculation();
	if($(this).val() == 1 || $(this).val() == 0) {
		$(".initem1_div3").show();
		$("#vat_invoice_tbody").hide();
		$(".tax_span").hide();
	} else {

		$(".initem1_div3").hide();
		$("#vat_invoice_tbody").show();
		$(".tax_span").show();
	}

});

function item1() {
	document.getElementById("item_2").checked = false;
	document.getElementById("item_3").checked = false;
}

function item2() {
	document.getElementById("item_1").checked = false;
	document.getElementById("item_3").checked = false;
}

function item3() {
	document.getElementById("item_1").checked = false;
	document.getElementById("item_2").checked = false;
}

function time1() {
	document.getElementById("time_2").checked = false;
	document.getElementById("time_3").checked = false;
}

function time2() {
	document.getElementById("time_1").checked = false;
	document.getElementById("time_3").checked = false;
}

function time3() {
	document.getElementById("time_1").checked = false;
	document.getElementById("time_2").checked = false;
}
var zhifu = 0;

function clickZhiFu() {
	zhifu++;
	if(zhifu % 2 == 0) {
		document.getElementById("zhifuinput").checked = true;
	} else {
		document.getElementById("zhifuinput").checked = false;
	}

}
$(".initem_head").click(function() {

	$(this).next().toggle();

});
var money = 0;
var yunfei = 0;
getMoney();

function getMoney() {
	for(var i = 0; i < $(".li_right").length; i++) {
		var danjia = Number($($(".li_right")[i]).find(".gs_money").text());
		var number = Number($($(".li_right")[i]).find(".gs_num").text());
		var money1 = Number(danjia * number);
		money += money1;
		var yunfei1 = (Number($($(".li_cent")[i]).find(".freght").text())) * number;
		yunfei += yunfei1
	}
	$(".total").text(money);
	$(".freitltle").text(yunfei);
	var service = Number($("#service_money").text());
	var zongjiage = Number(money + service);
	$("#amount_formated").text(zongjiage);
}

function serviceChange() {
	var zongjia = Number($("#amount_formated").text());
	var fuwufei2 = Number($("#service_money").text());
	if(document.getElementById("service").checked == true) {
		var ranhou = Number(zongjia + fuwufei2);
		$("#amount_formated").text(ranhou);
	} else {
		var ranhou = Number(zongjia - fuwufei2);
		$("#amount_formated").text(ranhou);
	}
}

function calculation() {
	var _val = $("#invoice_type").val();
	if(_val == 0) {
		$(".tax").text("0");
	}
	if(_val == 1 || _val == 2) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.03);
		$(".tax").text(shuijin.toFixed(2));
	}
	if(_val == 3) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.04);
		$(".tax").text(shuijin.toFixed(2));
	}
	if(_val == 4) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.06);
		$(".tax").text(shuijin.toFixed(2));
	}
	if(_val == 5) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.11);
		$(".tax").text(shuijin.toFixed(2));
	}
	if(_val == 6) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.13);
		$(".tax").text(shuijin.toFixed(2));
	}
	if(_val == 7) {
		var jiage = Number($("#amount_formated").text());
		var shuijin = Number(jiage * 0.17);
		$(".tax").text(shuijin.toFixed(2));
	}
}
var _view = 0;
$(".conhead").click(function() {

	_view = 1;
	$("#Citys").animate({
		left: "0px",
		opacity: "show"
	}, 'normal');
	alloc();

})

function alloc() {
	leftClick();
	rightClick();
	rememberMap();
	addMap();
}
alloc();
var _index;
var _tag;
//  右边是编辑地址 编辑地conhead址 
function rightClick() {

	$("#Citys").contents().find(".con_right").click(function() {
		_view = 2;
		_index = $(this).parents("li").index();
		_tag = 1;
		var oldName = $($(this).parents("li")).find(".con_name").text();
		var oldPhone = $($(this).parents("li")).find(".con_phone").text();
		var oldMap = $($(this).parents("li")).find(".con_down").text();
		$($("#Citys").contents().find(".mask")).find(".consigen").val(oldName);
		$($("#Citys").contents().find(".mask")).find(".phoneNum").val(oldPhone);
		$($("#Citys").contents().find(".mask")).find("textarea").val(oldMap);

		$("#Citys").contents().find(".mask").show();
		$($("#Citys").contents().find(".mask")).find(".ma_foot").show();

	});
}

//  左边是选择地址
function leftClick() {
	$("#Citys").contents().find(".con_left").click(function() {
		_view = 0;
		var _usName = $(this).find(".con_name").text();
		var _usPhone = $(this).find(".con_phone").text();
		var _usMap = $(this).find(".con_down").text();
		$("#concen_p_span1").text(_usName);
		$("#concen_phone_number").text(_usPhone);
		$("#con_cen_p_span2").text(_usMap);
		$("#Citys").hide();

	});
}

//  保存地址
function rememberMap() {

	$("#Citys").contents().find(".hideBtn").click(function() {

		_view = 1;
		if(_tag == 1) {
			var oldView = $($("#Citys").contents().find(".con_li ")[_index]);
			$(oldView).find(".con_name").text($($(this).parents(".mask")).find(".consigen").val());
			$(oldView).find(".con_phone").text($($(this).parents(".mask")).find(".phoneNum").val());
			$(oldView).find(".con_down").text($($(this).parents(".mask")).find(".address_input1").val() + $($(this).parents(".mask")).find("textarea").val());

			$(this).parents(".mask").hide();
			gui();
		} else {
			createLi();
			$(this).parents(".mask").find("input").val("");
			$(this).parents(".mask").find(".textarea").val("");
			$(this).parents(".ma_foot").hide();
			$(this).parents(".mask").hide();
			gui();

		}
		// input 歸零 

		function gui() {
			$($(this).parents(".mask")).find(".consigen").val("");
			$($(this).parents(".mask")).find(".phoneNum").val("");
			$($(this).parents(".mask")).find(".address_input1").val("")
			$($(this).parents(".mask")).find("textarea").val("");
		}
	})

}
//  添加地址
function addMap() {
	$("#Citys").contents().find(".addMap").click(function() {
		_view = 2
		_tag = 2;
		$(this).parents(".footer").next().show();
		$(this).parents(".footer").next().find(".ma_foot").show();
	})
}

//  拿到地址电话创建li的方法 
function createLi() {

	var usName = $("#Citys").contents().find(".consigen").val();
	var usPhone = $("#Citys").contents().find(".phoneNum").val();
	var oneMap = $("#Citys").contents().find(".address_input1").val();
	var twoMap = $("#Citys").contents().find("textarea").val();
	var _li = document.createElement("li");

	_li.className = "con_li";
	_li.innerHTML = "<div class='con_left'><div class='con_top'><span class='con_name'>" + usName + "</span> <span class='con_phone'>" + usPhone + "</span></div><div class='con_down'>" + oneMap + twoMap + "</div></div><div class='con_right'><img class='con_img' src='../img/111.png' class='chioce' alt=''></div>";
	$("#Citys").contents().find(".cont_ul").append(_li);

	leftClick();
	rightClick();
};

$(".header i").click(function() {
	if(_view == 0) {
		history.back();
	}
	if(_view == 1) {

		$("#Citys").animate({
			left: "400px",
			opacity: "hide"
		}, 'normal');

	}
	if(_view == 2) {
		$("#Citys").contents().find(".mask").hide();
	}
})