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

$('.search-item-content1 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content2').slideDown();
});

$('.search-item-content2 .filter-more').click(function () {
    var select1 = $(this).attr("name");

    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content3').slideDown();
});

$('.search-item-content3 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content4').slideDown();
});

$('.search-item-content4 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content5').slideDown();
});

$('.search-item-content5 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content6').slideDown();
});

$('.search-item-content6 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().parent().siblings().find('.search-item-content7').slideDown();
});

// checkbox functions

var valueList1 = document.getElementById('value_list1');
var listArray = [];
var keywordSearch = "";
var searchCourse = "";

var checkboxes = document.querySelectorAll('.checkbox');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray.push(this.value);
            // valueList1.innerHTML = listArray.join(", ");
        }
        else {
            listArray = listArray.filter(e => e !== this.value);
            // valueList1.innerHTML = listArray.join(", ");
        }

        onChangeItem1()
        // onChangeItem2()
    })
}

$('#course_name').on('focusout', e => {
    searchCourse = e.target.value;
    onChangeItem1()
})

$('#search_course').on("focusout", e => {
    // console.log(e.target.value)
    keywordSearch = e.target.value;
    onChangeItem1()
})

function onChangeItem1() {
    var finalTextArray = [];
    var checkboxText = listArray.join(", ");

    if (checkboxText != "") {
        finalTextArray.push(checkboxText);
    }
    if (searchCourse != "") {
        finalTextArray.push(searchCourse);
    }
    if (keywordSearch != "") {
        finalTextArray.push(keywordSearch);
    }

    valueList1.innerHTML = finalTextArray.join(", ");
}

// for child-age checkboxes

var valueList3 = document.getElementById('value_list3');
var listArray2 = [];

var checkboxes = document.querySelectorAll('.checkbox2');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray2.push(this.value);
            valueList3.innerHTML = listArray2.join(", ");
        }
        else {
            listArray2 = listArray2.filter(e => e !== this.value);
            valueList3.innerHTML = listArray2.join(", ");
        }
    })
}

$('.search-item-content3 .reset-btn').click(function () {
    listArray2 = [];
    valueList3.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
})

// functions for who is it checkboxes

var valueList6 = document.getElementById('value_list6');
var listArray5 = [];

var checkboxes = document.querySelectorAll('.checkbox5');

for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray5.push(this.value);
            valueList6.innerHTML = listArray5.join(", ");
        }
        else {
            listArray5 = listArray5.filter(e => e !== this.value);
            valueList6.innerHTML = listArray5.join(", ");
        }
    })
}

$('.search-item-content6 .reset-btn').click(function () {
    listArray5 = [];
    valueList6.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
})

//   reset btn function starts here

$('.search-item-content1 .reset-btn').click(function () {
    listArray = [];
    valueList1.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
})

$('.search-item-content3 .reset-btn').click(function () {
    listArray2 = [];
    valueList3.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
})

$('.search-btn .reset-icon').click(function () {
    listArray = [];
    listArray1 = [];
    listArray2 = [];
    listArray3 = [];
    listArray4 = [];
    listArray5 = [];
    listArray6 = [];
    $('.search-field p').text('');
    $('input[type=checkbox]').prop("checked", false);
    $('#country').val("")
});

$('#district').change(function (e) {
    valueList4 = $('#value_list4');
    let value4 = e.target.value;
    valueList4.text(value4);
})

$('#range').change(function (e) {
    valueList4 = $('#value_list4');
    let value5 = e.target.value;
    valueList4.text(value5);
})

$('#country').change(function (e) {
    valueList7 = $('#value_list7');
    var value7 = e.target.value;
    valueList7.text(value7);
});

// ends-here

$('#parent-checkbox1').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox1").css('display') == 'block';
    isChecked = $("#event-topic-1").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox1').slideToggle();
        // $("#event-topic-1").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-1").prop("checked", true);
        $(".sub-checkbox1").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-1").prop("checked", false)
        $(".sub-checkbox1").prop("checked", false);
        $(this).siblings('#child-checkbox1').slideUp();
    }
});

// const allSubCheckbox = $('.sub-checkbox1');
let listA = [false, false, false, false];

$('#additional-concerns').click(function () {

    if($(this).is(":checked") ){
        listA[0] = true;
    }
    else{
        listA[0] = false;
    }

    let isAllvalueTrue = true;

    for (let index = 0; index < listA.length; index++) {
        if (listA[index] == false) {
            isAllvalueTrue = false;
            break;
        }
    }

    if (isAllvalueTrue == true) {
        $("#event-topic-1").prop( "checked", true );
    }

    else {
        $("#event-topic-1").prop( "checked", false );

    }
})

$('#behavior').click(function () {

    if($(this).is(":checked") ){
        listA[1] = true;
    }
    else{
        listA[1] = false;
    }

    let isAllvalueTrue = true;

    for (let index = 0; index < listA.length; index++) {
        if (listA[index] === false) {
            isAllvalueTrue = false;
            break;
        }
    }

    if (isAllvalueTrue == true) {
        ($("#event-topic-1").prop( "checked", true ));
    }
    else {
        ($("#event-topic-1").prop( "checked", false ));
    }
})

$('#emotional_social').click(function () {

    if($(this).is(":checked") ){
        listA[2] = true;
    }
    else{
        listA[2] = false;
    }

    let isAllvalueTrue = true;

    for (let index = 0; index < listA.length; index++) {
        if (listA[index] === false) {
            isAllvalueTrue = false;
            break;
        }
    }

    if (isAllvalueTrue == true) {
        ($("#event-topic-1").prop( "checked", true ));
    }
    else {
        ($("#event-topic-1").prop( "checked", false ));
    }
})

$('#health').click(function () {

    if($(this).is(":checked") ){
        listA[3] = true;
    }
    else{
        listA[3] = false;
    }

    let isAllvalueTrue = true;

    for (let index = 0; index < listA.length; index++) {
        if (listA[index] === false) {
            isAllvalueTrue = false;
            break;
        }
    }

    if (isAllvalueTrue == true) {
        ($("#event-topic-1").prop( "checked", true ));
    }

    else {
        ($("#event-topic-1").prop( "checked", false ));
    }
})
console.log(listA);


// allSubCheckbox.each(function (index) {
//     let subCheckbox = allSubCheckbox[index];
//     $(subCheckbox).on('change', function () {
//         listA.push($(this).is(':checked'));
//         if(listA.includes(false)) {
//             $("#event-topic-1").prop( "checked", false );
//         }
//         else {
//             $("#event-topic-1").prop( "checked", true );
//         }
//     }) 
// })

$('#parent-checkbox2').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox2").css('display') == 'block';
    isChecked = $("#event-topic-2").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox2').slideToggle();
        // $("#event-topic-1").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-2").prop("checked", true);
        $(".sub-checkbox2").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-2").prop("checked", false)
        $(".sub-checkbox2").prop("checked", false);
        $(this).siblings('#child-checkbox2').slideUp();
    }
});

$('#parent-checkbox3').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox3").css('display') == 'block';
    isChecked = $("#event-topic-3").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox3').slideToggle();
        // $("#event-topic-1").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-3").prop("checked", true);
        $(".sub-checkbox3").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-3").prop("checked", false)
        $(".sub-checkbox3").prop("checked", false);
        $(this).siblings('#child-checkbox3').slideUp();
    }
});

$('#parent-checkbox4').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox4").css('display') == 'block';
    isChecked = $("#event-topic-4").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox4').slideToggle();
        // $("#event-topic-4").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-4").prop("checked", true);
        $(".sub-checkbox4").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-4").prop("checked", false)
        $(".sub-checkbox4").prop("checked", false);
        $(this).siblings('#child-checkbox4').slideUp();
    }
});

$('#parent-checkbox5').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox5").css('display') == 'block';
    isChecked = $("#event-topic-5").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox5').slideToggle();
        // $("#event-topic-5").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-5").prop("checked", true);
        $(".sub-checkbox5").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-5").prop("checked", false)
        $(".sub-checkbox5").prop("checked", false);
        $(this).siblings('#child-checkbox5').slideUp();
    }
});

$('#parent-checkbox6').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox6").css('display') == 'block';
    isChecked = $("#event-topic-6").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox6').slideToggle();
        // $("#event-topic-6").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        $("#event-topic-6").prop("checked", true);
        $(".sub-checkbox6").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        $("#event-topic-6").prop("checked", false)
        $(".sub-checkbox6").prop("checked", false);
        $(this).siblings('#child-checkbox6').slideUp();
    }
});



