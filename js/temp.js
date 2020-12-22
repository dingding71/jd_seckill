// 抢购
parent.document.getElementById("btn-reservation").length;
parent.document.getElementById("btn-reservation").click();
// 去购物车结算
parent.document.getElementById("GotoShoppingCart").click();
// 去结算
$(parent.document).find("common-submit-btn").length
parent.document.getElementsByClassName("common-submit-btn")[0].click();


// 抢购
if ($(parent.frames[0].document).find("#choose-btn-ko").length == 1) {
    console.log("(++++++++++++抢购");
    var sku = window.location.pathname.replace(/[^0-9]/ig, "");
    var ref = "//cart.jd.com/gate.action?pid=" + sku + "&pcount=1&ptype=1";
    console.log("https:" + ref);
    //5089237
    $(parent.frames[0].document).find("#choose-btn-ko").attr("href", ref);//
    parent.frames[0].document.getElementById("choose-btn-ko").click();

}

//预约抢购
if ($(parent.frames[0].document).find("#btn-reservation").length == 1) {
    console.log("(++++++++++++正在预约抢购");

    parent.frames[0].document.getElementById("btn-reservation").click();

}

//秒杀
if ($(parent.frames[0].document).find("#InitCartUrl").length == 1) {
    console.log("(++++++++++++正在秒杀");
    parent.frames[0].document.getElementById("InitCartUrl").click();

}

//去购物车结算
if ($(parent.frames[0].document).find("#GotoShoppingCart").length == 1) {
    console.log("(++++++++++++正在去购物车结算");
    parent.frames[0].document.getElementById("GotoShoppingCart").click();

}
// if($0.textContent == "去购物车结算"){
//     console.log("(++++++++++++正在去购物车结算");
//     $0.click();
// }

//去结算
if ($(parent.frames[0].document).find("common-submit-btn").length == 1) {
//if (   $0.text == '去结算' ){
    console.log("(++++++++++++正在去结算");

    //只提交我抢购的商品
    //var sku = window.location.pathname.replace(/[^0-9]/ig, "");

    //$("#toggle-checkboxes_up").trigger("click");
    //全不选择
    //parent.frames[0].document.getElementById("toggle-checkboxes_up").click();

    //$(parent.frames[0].document).find('input:checkbox').attr("checked",false);
    //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").trigger("click");

    //$(parent.frames[0].document).find("input:checkbox[value^='"+sku+"']").attr("checked",true);

    parent.frames[0].document.getElementsByClassName("common-submit-btn")[0].click();

}
//提交订单order-submit
if ($(parent.frames[0].document).find("#order-submit").length == 1) {
    console.log("(++++++++++++正在提交订单");
    //$(parent.frames[0].document).find(".payment-item item-selected online-payment")

    //在线支付
    parent.frames[0].document.getElementById("order-submit").click();

}