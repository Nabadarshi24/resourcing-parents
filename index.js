// top-search function starts here

// $(document).ready(function () {
//     $(".search-by-suburb").click(function () {
//         $(".hidden-search-by-suburb").show();
//     });
// });

$('.hamburger').click(function(){
    console.log(".hamb");
    $(this).toggleClass("click");
    $('.side-menu').toggleClass("show");
});


$('.show-btn1').click(function(){
    $(".side-menu ul .sub-menu1").toggleClass(("show1"));
    $(this).toggleClass(("rotate"));
});

$('.show-btn2').click(function(){
    $(".side-menu ul .sub-menu2").toggleClass(("show2"));
    $(this).toggleClass(("rotate"));
});

$('.show-btn3').click(function(){
    $(".side-menu ul .sub-menu3").toggleClass(("show3"));
    $(this).toggleClass(("rotate"));
});

$('.show-btn4').click(function(){
    $(".side-menu ul .sub-menu4").toggleClass(("show4"));
    $(this).toggleClass(("rotate"));
});
// ends-here