
$(function () {
    $(".push-button-one a").click(function () {
        $(".rightpage").hide();
        $(".about-me").fadeIn(700);
    })
});
$(function () {
    $(".push-button-close1 a").click(function () {
        $(".rightpage").fadeIn(700);
        $(".about-me").hide();
    })
});
//readmore 按钮
$(function () {
    $(".push-button-three a").click(function () {
        $(".rightpage").hide();
        $(".readmore").fadeIn(700);
    })
});
$(function () {
    $(".push-button-close2 a").click(function () {
        $(".rightpage").fadeIn(700);
        $(".readmore").hide();
    })
});
//LE按钮
$(function () {
    $(".push-button-four a").click(function () {
        $(".rightpage").hide();
        $(".LE").fadeIn(700);
    })
});
$(function () {
    $(".push-button-close3 a").click(function () {
        $(".rightpage").fadeIn(700);
        $(".LE").hide();
    })
});

$("#b").fadeIn(700);
