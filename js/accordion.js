$(".js-part").click(function() {
    $(this).toggleClass('active');
    if(!$(this).hasClass('active')){
        $(this).siblings().removeClass('active');
        // $(this).removeClass('active');
        // $(this).toggleClass('active');
    }
});

var elemCount = $('.product__part.active > .product__checkbox > .zrenda-checkbox').length;

console.log(elemCount);

$(".product__part.active .product__checkbox").css({
    // 'height': elemCount*45+45
});
