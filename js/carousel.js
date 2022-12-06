function browserDetect(){
    var browserName = (function (agent) {switch (true) {
        case agent.indexOf("edge") > -1: return "MS Edge";
        case agent.indexOf("edg/") > -1: return "Edge";
        case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case agent.indexOf("trident") > -1: return "MS IE";
        case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case agent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }})(window.navigator.userAgent.toLowerCase());

    return (browserName)
}

$(document).ready(function() {
    // var browser = browserDetect()
    // if (browser == "Edge" || browser == "MS Edge") {
    //     $(".carousel-text").each(function(index, elem) {
    //         $(elem).css({"top": "50%", "opacity": "1"})
    //     });
    //     return
    // }
    var currentSlideId = ($(".carousel-item.active").attr('id')).split('-');

    $(".carousel-text").each(function(index, elem) {
        $(elem).animate({top: '65%', opacity: '0'});
        var id = ($(elem).attr('id').split('-'));
        if (id[1] == currentSlideId[1]) {
            $(elem).animate({top: '50%', opacity: '1',}, "slow");
        }
    });
});


$("#carouselBillboard").on("slid.bs.carousel", function() {
    // var browser = browserDetect()
    // if (browser == "Edge" || browser == "MS Edge") {
    //     return
    // }
    var currentSlideId = ($(".carousel-item.active").attr('id')).split('-');

    $(".carousel-text").each(function(index, elem) {
        $(elem).animate({top: '65%', opacity: '0'});
        var id = ($(elem).attr('id').split('-'));
        if (id[1] == currentSlideId[1]) {
            $(elem).animate({top: '50%', opacity: '1'}, "slow");
        }
    });
});