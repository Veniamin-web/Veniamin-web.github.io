$(document).ready(function () {
   $(".header__menu-btn").click(function () {
      $(this).toggleClass("active");
      $('.header__burger-items').slideToggle(300, function () {
         if ($(this).css('display') === "none") {
            $(this).removeAttr('style');
         }
      });
   });
});
// $(function () {

//    $('.header__menu-btn').on('click', function () {
//       $('.header__burger-items').slideToggle();
//    });

// });