// top-search function starts here

$(document).ready(function () {
    $(".search-by-suburb").click(function () {
        $(".hidden-search-by-suburb").toggleClass("show");
    });

    $('.close-btn').click(function () {
        $('.hidden-search-by-suburb').removeClass('show').addClass('hide');
    });
});

// ends here

// sidebar functions starts here

$('.hamburger').click(function () {
    $(this).toggleClass("click");
    $('.side-menu').toggleClass("show");
});


// $('.show-btn1').click(function(){
//     $(".side-menu ul .sub-menu1").toggleClass(("show1"));
//     $(this).toggleClass(("rotate"));
// });

// $('.show-btn2').click(function(){
//     $(".side-menu ul .sub-menu2").toggleClass(("show2"));
//     $(this).toggleClass(("rotate"));
// });

// $('.show-btn3').click(function(){
//     $(".side-menu ul .sub-menu3").toggleClass(("show3"));
//     $(this).toggleClass(("rotate"));
// });

// $('.show-btn4').click(function(){
//     $(".side-menu ul .sub-menu4").toggleClass(("show4"));
//     $(this).toggleClass(("rotate"));
// });

$('.side-menu ul li .main-li span').click(function () {
    var selected = $(this).attr("name");
    var selectR = $(this).attr("name1");
    console.log(selectR);
    $('.' + selected).toggle().parent().siblings().children(".sub-menu").hide();

    // console.log($('.' + selectR)
    // .toggleClass('rotate')
    // .parentsUntil('ul')
    // .siblings()
    // .find(".show-btn:not(." + selectR + ")"))

    $('.' + selectR)
        .toggleClass('rotate')
        .parentsUntil('ul')
        .siblings()
        .find(".show-btn:not(." + selectR + ")")
        .removeClass('rotate');

    // recheck later for if-else
});
// ends-here

// main-search functions starts here

$('.search-btn .search-icon').click(function () {
    $('.sidebar').toggleClass('show');
    $('.main-search-container').slideToggle();
    $('.right-sidebar').toggleClass('show');
});

$('.search-header').click(function () {

    var select = $(this).attr("name");
    $('.' + select).slideToggle().parent().siblings().children(".search-item-content").slideUp();
});

// ends-here

