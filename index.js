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


$('.side-menu ul li .main-li span').click(function () {
    var selected = $(this).attr("name");
    var selectR = $(this).attr("name1");
    console.log(selectR);
    $('.' + selected).toggle().parent().siblings().children(".sub-menu").hide();


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

$('.search-item-content1 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content2').slideDown();
});

$('.search-item-content2 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content3').slideDown();
});

$('.search-item-content3 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content4').slideDown();
});

$('.search-item-content4 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content5').slideDown();
});

$('.search-item-content5 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content6').slideDown();
});

$('.search-item-content6 .filter-more').click(function() {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content7').slideDown();
});

// checkbox functions

var valueList = document.getElementById('value_list');
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray.push(this.value);
            // console.log(listArray);
            valueList.innerHTML = listArray.join(", ");
        }
        else {
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = listArray.join(", ");
        }
    })
}

$('#parent-checkbox1').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox1').slideToggle();
  });

  $('#parent-checkbox2').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox2').slideToggle();
  });

  $('#parent-checkbox3').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox3').slideToggle();
  });

  $('#parent-checkbox4').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox4').slideToggle();
  });

  $('#parent-checkbox5').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox5').slideToggle();
  });

  $('#parent-checkbox6').click(function(e) {
    e.preventDefault();
    $(this).siblings('#child-checkbox6').slideToggle();
  });

//   reset btn function starts here

$('.search-item-content1 .reset-btn').click(function() {
    // $(this).parent().parent().siblings().find('.search-field p').reset();
    valueList.innerHTML = '';
})

$('.search-btn .reset-icon').click(function() {
    valueList.innerHTML = '';
});

$('#country').change(function(e) {
    // console.log(e.target.value);
    var value  = e.target.value;
    valueList.innerHTML = value;
    console.log(valueList)
})

// ends-here

