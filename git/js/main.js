$(".accordian").on("click", ".accordian-title", function () {
    $(this).toggleClass("active").next().slideToggle(500);
});
function outputUpdate(vol) {
    var output = document.querySelector('#volume');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
    if (output.value > 9) {
        output.style.left = vol - 30 + 'px';
    }
    if (output.value > 99) {
        output.style.left = vol - 40 + 'px';
    }
    if (output.value > 240) {
        output.style.left = vol - 45 + 'px';
    }
    if (output.value > 430) {
        output.style.left = vol - 50 + 'px';
    }
    if (output.value > 470) {
        output.style.left = vol - 55 + 'px';
    }
};
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});
