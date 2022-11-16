
$(function () {
    $(".push-button-one a").click(function () {
        $(".rightpage").hide();
        $(".about-me").show();
    })
});
$(function () {
    $(".push-button-close1 a").click(function () {
        $(".rightpage").show();
        $(".about-me").hide();
    })
});
//readmore 按钮
$(function () {
    $(".push-button-three a").click(function () {
        $(".rightpage").hide();
        $(".readmore").show();
    })
});
$(function () {
    $(".push-button-close2 a").click(function () {
        $(".rightpage").show();
        $(".readmore").hide();
    })
});
//LE按钮
$(function () {
    $(".push-button-four a").click(function () {
        $(".rightpage").hide();
        $(".LE").show();
    })
});
$(function () {
    $(".push-button-close3 a").click(function () {
        $(".rightpage").show();
        $(".LE").hide();
    })
});
