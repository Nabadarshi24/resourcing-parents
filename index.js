// top-search function starts here

$(document).ready(function () {
    $(".search-by-suburb").click(function () {
        $(".hidden-search-by-suburb").toggleClass("show").removeClass('hide');
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

// function doOnBodyResize(num) {

//     var sideMenuHeight = $("body").height() - num;
//     $('.side-menu').css({
//         "height": sideMenuHeight + "px"
//     })
// }

// $(function () {
//     doOnBodyResize(170)
// });

// ends-here

// main-search functions starts here

$('.search-btn .search-icons').click(function () {

    if ($(window).width() < 992) {
        console.log('adjab');
        if ($('.search-icon').hasClass('d-none') == true) {
            $('.search-icon').removeClass('d-none');
            $('.search-icon-close').addClass('d-none');
        }
        else {
            $('.search-icon').addClass('d-none');
            $('.search-icon-close').removeClass('d-none');
        }

    }

    const wasShowing = $('.sidebar').hasClass('show');
    let currentHeight = $('.side-menu').outerHeight();
    let bodyHeight = $('body').outerHeight();
    console.log({ currentHeight, wasShowing });

    if (wasShowing == true) {
        currentHeight = bodyHeight - 227;
    } else {
        currentHeight = bodyHeight - 171;
    }
    console.log({ nweHeight: currentHeight });

    $('.sidebar').toggleClass('show');
    $('.main-search-container').slideToggle();
    $('.right-sidebar').toggleClass('show');
    $('.hamburger').toggleClass('show');
    $('.side-menu').toggleClass('show-toggle');

    // $('.side-menu').css({
    //     "height": currentHeight + "px"
    // })
});

$('.search-header').click(function () {
    var select = $(this).attr("name");
    $('.' + select).slideToggle().parent().siblings().children(".search-item-content").slideUp();
    $(this).children('.search-title').toggleClass('bg-color').parent().parent().siblings().find('.search-title').removeClass('bg-color');
});

// $('.filter-more').click(function () {
//     $(this).parent().parent().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-title').addClass('bg-color');
// })

$('.search-item-content1 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content2').slideDown().siblings().find('.search-title').addClass('bg-color');
});

$('.search-item-content2 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content3').slideDown().siblings().find('.search-title').addClass('bg-color');
});

$('.search-item-content3 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content4').slideDown().siblings().find('.search-title').addClass('bg-color');
});

$('.search-item-content4 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content5').slideDown().siblings().find('.search-title').addClass('bg-color');
});

$('.search-item-content5 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content6').slideDown().siblings().find('.search-title').addClass('bg-color');
});

$('.search-item-content6 .filter-more').click(function () {
    var select1 = $(this).attr("name");
    $('.' + select1).parent().parent().slideUp().siblings().find('.search-title').removeClass('bg-color').parent().parent().siblings().find('.search-item-content7').slideDown().siblings().find('.search-title').addClass('bg-color');
});

// checkbox functions

// functions for keyword and program finder

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
        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

$('#course_name').on('focusout', e => {
    searchCourse = e.target.value;
    onChangeItem1()
    onSearchFieldChange()
    onSearchFieldChange1();
})

$('#search_course').on("focusout", e => {
    // console.log(e.target.value)
    keywordSearch = e.target.value;
    onChangeItem1()
    onSearchFieldChange()
    onSearchFieldChange1();
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

$('.search-item-content1 .reset-btn').click(function () {
    listArray = [];
    finalTextArray = [];
    keywordSearch = "";
    searchCourse = "";
    valueList1.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
    $('input[type=text]').val('');
    onSearchFieldChange();
    onSearchFieldChange1();
})

// ends here

// change show-courses and submit-btn bg-color 

var searchFields = $('.search-field p');

const onSearchFieldChange = function () {

    if ($('.search-field p').text() !== "") {
        $('.main-search-submit-btn').css({
            backgroundColor: '#78ac3a'
        });

    } else {
        $('.main-search-submit-btn').css({
            backgroundColor: '#0d51b9'
        });

    }

    for (let searchField of searchFields) {
        let value = $(searchField).text();

        // console.log({ value, this: $(this), sf: $(searchField) });
        if (value !== "") {
            $(searchField).parent().closest(".search-item-container").find(".show-courses").css({
                backgroundColor: '#78ac3a'
            })
        }
        else {
            $(searchField).parent().closest(".search-item-container").find(".show-courses").css({
                backgroundColor: '#8293b1'
            })
        }
    }
}

const onSearchFieldChange1 = function () {
    for (var searchField of searchFields) {
        let value = $(searchField).text();
        if (value !== "") {
            $(searchField).parent().addClass('show');
        }

        else {
            $(searchField).parent().removeClass('show');
        }
    }
}

// ends-here



// functions for what's it about sections

$('#parent-checkbox1').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox1").css('display') == 'block';
    isChecked = $("#event-topic-1").is(':checked');


    if (isB == false) {
        $(this).siblings('#child-checkbox1').slideToggle();
        // $("#event-topic-1").prop( "checked", true );
    }
    else if (isB == true && isChecked == false) {
        // $("#event-topic-1").prop("checked", true);
        $(".sub-checkbox1").prop("checked", true);
    }
    else if (isB == true && isChecked == true) {
        // $("#event-topic-1").prop("checked", false)
        $(".sub-checkbox1").prop("checked", false);
        $(this).siblings('#child-checkbox1').slideUp();
    }

    checkIsChildChecked(listArray1, subCheckboxes1, "#event-topic-1")
});

// function check1() {
//     return;

//     let checkbox = document.getElementsByClassName('sub-checkbox1');
//     let ln = 0;
//     for (var i = 0; i < checkbox.length; i++) { //check for child checkboxes
//         if (checkbox[i].checked)
//             ln++;
//     }

//     // select parent if all child are checked

//     let all = document.getElementsByClassName('sub-checkbox1');
//     let num = all.length;

//     if (ln == num) {
//         document.getElementById("event-topic-1").checked = true;
//     }
//     else {
//         document.getElementById("event-topic-1").checked = false;
//     }
// }

var valueList2 = document.getElementById('value_list2');
var listArray1 = [];
var subCheckboxes1 = document.querySelectorAll('#child-checkbox1 input[type=checkbox]');


const checkIsChildChecked = function (listArray, subCheckboxes, parentCheckbox) {
    let subListArray = [];
    let itemsToBeRemoved = [];
    let parentText = "";

    for (var subCheckbox of subCheckboxes) {
        const text = $(subCheckbox).val();
        itemsToBeRemoved.push(text)

        if ($(subCheckbox).is(":checked") == true) {
            subListArray.push(text);
        }

        console.log({ text, subCheckboxes, subListArray });
        if (subListArray.length === subCheckboxes.length) {
            $(parentCheckbox).prop("checked", true);
            parentText = $(parentCheckbox).val()
        } else if (subListArray.length !== subCheckboxes.length) {
            $(parentCheckbox).prop("checked", false);
            parentText = ""
        }
    }

    function ccc(z) {
        // return !itemsToBeRemoved.includes(z);

        itemsToBeRemoved.forEach(function (params) {
            if (params === z) {
                return false;
            }
        })
    }

    listArray = listArray.filter(z => !itemsToBeRemoved.includes(z))

    // listArray = listArray.filter(z => {
    //     return !itemsToBeRemoved.includes(z)
    // })

    // listArray = listArray.filter(ccc)

    // listArray = listArray.filter(function (z) {
    //     return !itemsToBeRemoved.includes(z)
    // })

    if (parentText != "") {
        listArray.push(parentText);
    }

    subListArray.forEach(x => {
        listArray.push(x);
    })

    valueList2.innerHTML = listArray.join(", ")

    onSearchFieldChange();
    onSearchFieldChange1();
}

for (var subCheckbox1 of subCheckboxes1) {

    subCheckbox1.addEventListener('click', function () {
        checkIsChildChecked(listArray1, subCheckboxes1, "#event-topic-1")
    })
}


$('#parent-checkbox2').click(function (e) {
    e.preventDefault();
    isB = $("#child-checkbox2").css('display') == 'block';
    isChecked = $("#event-topic-2").is(':checked');

    if (isB == false) {
        $(this).siblings('#child-checkbox2').slideToggle();
        // $("#event-topic-1").prop( "checked", true );
    }

    else if (isB == true && isChecked == false) {
        // $("#event-topic-2").prop("checked", true);
        $(".sub-checkbox2").prop("checked", true);
    }

    else if (isB == true && isChecked == true) {
        // $("#event-topic-2").prop("checked", false)
        $(".sub-checkbox2").prop("checked", false);
        $(this).siblings('#child-checkbox2').slideUp();
    }

    checkIsChildChecked(listArray1, subCheckboxes2, "#event-topic-2");
});

// function check2() {
//     let checkbox = document.getElementsByClassName('sub-checkbox2');
//     let ln = 0;
//     for (let i = 0; i < checkbox.length; i++) { //check for child checkboxes
//         if (checkbox[i].checked)
//             ln++;
//     }

//     //select parent if all child are checked
//     let all = document.getElementsByClassName('sub-checkbox2');
//     let num = all.length;

//     if (ln == num) {
//         document.getElementById("event-topic-2").checked = true;
//     }
//     else {
//         document.getElementById("event-topic-2").checked = false;
//     }
// }

var subCheckboxes2 = document.querySelectorAll('#child-checkbox2 input[type=checkbox]');

for (var subCheckbox2 of subCheckboxes2) {
    // subCheckbox2.addEventListener('click', function () {
    //     if (this.checked == true) {
    //         listArray1.push(this.value);
    //         valueList2.innerHTML = listArray1.join(", ");
    //     }
    //     else {
    //         listArray1 = listArray1.filter(e => e !== this.value);
    //         valueList2.innerHTML = listArray1.join(", ");
    //     }

    //     onSearchFieldChange();
    //     onSearchFieldChange1();
    // })

    subCheckbox2.addEventListener('click', function () {

        checkIsChildChecked(listArray1, subCheckboxes2, "#event-topic-2");
    })
}


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


function checkbox3() {
    let checkbox = document.getElementsByClassName('sub-checkbox3');
    let ln = 0;
    for (let i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    let all = document.getElementsByClassName('sub-checkbox3');
    let num = all.length;

    if (ln == num) {
        document.getElementById("event-topic-3").checked = true;
    }
    else {
        document.getElementById("event-topic-3").checked = false;
    }
}


var subCheckboxes3 = document.querySelectorAll('#child-checkbox3 input[type=checkbox]');

for (var subCheckbox3 of subCheckboxes3) {
    subCheckbox3.addEventListener('click', function () {
        if (this.checked == true) {
            listArray1.push(this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }
        else {
            listArray1 = listArray1.filter(e => e !== this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

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

function checkbox4() {
    let checkbox = document.getElementsByClassName('sub-checkbox4');
    let ln = 0;
    for (let i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    let all = document.getElementsByClassName('sub-checkbox4');
    let num = all.length;

    if (ln == num) {
        document.getElementById("event-topic-4").checked = true;
    }
    else {
        document.getElementById("event-topic-4").checked = false;
    }
}

var subCheckboxes4 = document.querySelectorAll('#child-checkbox4 input[type=checkbox]');

for (var subCheckbox4 of subCheckboxes4) {
    subCheckbox4.addEventListener('click', function () {
        if (this.checked == true) {
            listArray1.push(this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }
        else {
            listArray1 = listArray1.filter(e => e !== this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}


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


function checkbox5() {
    let checkbox = document.getElementsByClassName('sub-checkbox5');
    let ln = 0;
    for (let i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    let all = document.getElementsByClassName('sub-checkbox5');
    let num = all.length;

    if (ln == num) {
        document.getElementById("event-topic-5").checked = true;
    }
    else {
        document.getElementById("event-topic-5").checked = false;
    }
}

var subCheckboxes5 = document.querySelectorAll('#child-checkbox5 input[type=checkbox]');

for (var subCheckbox5 of subCheckboxes5) {
    subCheckbox5.addEventListener('click', function () {
        if (this.checked == true) {
            listArray1.push(this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }
        else {
            listArray1 = listArray1.filter(e => e !== this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

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

function checkbox6() {
    let checkbox = document.getElementsByClassName('sub-checkbox6');
    let ln = 0;
    for (let i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    let all = document.getElementsByClassName('sub-checkbox6');
    let num = all.length;

    if (ln == num) {
        document.getElementById("event-topic-6").checked = true;
    }
    else {
        document.getElementById("event-topic-6").checked = false;
    }
}

var subCheckboxes6 = document.querySelectorAll('#child-checkbox6 input[type=checkbox]');

for (var subCheckbox6 of subCheckboxes6) {
    subCheckbox6.addEventListener('click', function () {
        if (this.checked == true) {
            listArray1.push(this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }
        else {
            listArray1 = listArray1.filter(e => e !== this.value);
            valueList2.innerHTML = listArray1.join(", ");
        }

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

$('.search-item-content2 .reset-btn').click(function () {
    listArray1 = [];
    valueList2.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
    onSearchFieldChange();
    onSearchFieldChange1();
})

// ends-here

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

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

$('.search-item-content3 .reset-btn').click(function () {
    listArray2 = [];
    valueList3.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);

    onSearchFieldChange();
    onSearchFieldChange1();
})

// functions for where container

var valueList4 = document.getElementById('value_list4');
var listArray3 = [];
var suburbCode = "";

var selectBoxes = document.querySelectorAll('.select-field');

for (var selectBox of selectBoxes) {
    // console.log(selectBox)
    selectBox.addEventListener('change', function (e) {
        let value = e.target.value;
        if (value !== "") {
            listArray3.push(value);
            // valueList4.innerHTML = listArray3.join(", ");
        }

        onChangeItem2()
        onSearchFieldChange();
        onSearchFieldChange1();

    })
}


$('#suburb').on("focusout", e => {
    suburbCode = e.target.value;
    onChangeItem2()
    onSearchFieldChange();
    onSearchFieldChange1();
})

function onChangeItem2() {
    let finalTextArray = [];
    var selectBoxText = listArray3.join(", ");

    if (suburbCode != "") {
        finalTextArray.push(suburbCode);
    }
    if (selectBoxText != "") {
        finalTextArray.push(selectBoxText);
    }

    valueList4.innerHTML = finalTextArray.join(", ");
}

$('.search-item-content4 .reset-btn').click(function () {
    listArray3 = [];
    valueList4.innerHTML = '';
    $('input[type=text]').val('');
    $('.select-field').val('');

    onSearchFieldChange();
    onSearchFieldChange1();
});

// ends-here

// functions for when container

var valueList5 = document.getElementById('value_list5');
var listArray4 = [];

var whenCheckboxes = document.querySelectorAll('.when-checkbox');
var selectFields = document.querySelectorAll('.date-field');

for (var selectField of selectFields) {
    // console.log(selectField)
    selectField.addEventListener('change', function (e) {
        let value = e.target.value;
        if (value !== "") {
            listArray4.push(value);
            // valueList4.innerHTML = listArray3.join(", ");
            console.log(listArray4)
        }
        else {
            listArray3 = listArray3.filter(e => e !== this.value);
            // valueList1.innerHTML = listArray3.join(", ");
        }

        onChangeItem3()
        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

for (var whenCheckbox of whenCheckboxes) {
    whenCheckbox.addEventListener('click', function (e) {
        if (this.checked == true) {
            listArray4.push(this.value);

            console.log(listArray4)
        }
        else {
            listArray4 = listArray4.filter(e => e !== this.value);
            // valueList1.innerHTML = listArray3.join(", ");
        }
        onChangeItem3()
        onSearchFieldChange();
        onSearchFieldChange1();
    })

}

function onChangeItem3() {
    let finalTextArray = [];
    let selectBoxText = listArray4.join(", ");

    // if (suburbCode != "") {
    //     finalTextArray.push(suburbCode);
    // }
    if (selectBoxText != "") {
        finalTextArray.push(selectBoxText);
    }

    valueList5.innerHTML = finalTextArray.join(", ");
}

$('.search-item-content5 .reset-btn').click(function () {
    listArray4 = [];
    valueList5.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);
    $('.date-field').val('');

    onSearchFieldChange();
    onSearchFieldChange1();
})

// ends-here

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

        onSearchFieldChange();
        onSearchFieldChange1();
    })
}

$('.search-item-content6 .reset-btn').click(function () {
    listArray5 = [];
    valueList6.innerHTML = '';
    $('input[type=checkbox]').prop("checked", false);

    onSearchFieldChange();
    onSearchFieldChange1();
})

// ends-here

// functions for language field

$('#country').change(function (e) {
    valueList7 = $('#value_list7');
    var value7 = e.target.value;
    valueList7.text(value7);

    onSearchFieldChange();
    onSearchFieldChange1();
});

$('.search-item-content7 .reset-btn').click(function (e) {
    valueList7 = $('#value_list7');
    value7 = e.target.value;
    valueList7.text("");
    $('#country').val('');

    onSearchFieldChange();
    onSearchFieldChange1();
})

// ends-here

// main reset-btn function starts here

$('.search-btn .reset-icon').click(function () {
    listArray = [];
    listArray1 = [];
    listArray2 = [];
    listArray3 = [];
    listArray4 = [];
    listArray5 = [];
    keywordSearch = "";
    searchCourse = "";
    finalTextArray = [];
    // listArray6 = [];
    $('.search-field p').text('');
    $('input[type=checkbox]').prop("checked", false);
    $('#country').val("");
    $('input[type=text]').val("");
    $('input[type=date]').val("");
    $('select').val("");

    onSearchFieldChange();
    onSearchFieldChange1();
});

// ends-here

// submit-btn functions starts here

$(".main-search-submit-btn").click(function (e) {

    console.log("main-search-submit-btn");
    e.preventDefault();
    let searchItemContent1 = {
        onoToOne: $('#one_to_one').is(':checked'),
        groupsSeminars: $('#groups_seminars').is(':checked'),
        online: $('#online').is(':checked'),
        courseName: $('#course_name').val(),
        keyword: $('#search_course').val()
    }

    let searchItemContent2 = {
        parentCheckbox1: {
            childrenD: $('#event-topic-1').is(':checked'),
            additionalC: $('#additional-concerns').is(':checked'),
            behavior: $('#behavior').is(':checked'),
            emotionalS: $('#emotional_social').is(':checked'),
            health: $('#health').is(':checked')
        },

        parentCheckbox2: {
            earlyLePlay: $('#event-topic-2').is(':checked'),
            playgroup: $('#playgroup').is(':checked'),
            playLearn: $('#play_learn').is(':checked'),
            transitionSchool: $('#transition_school').is(':checked'),
            reading: $('#reading').is(':checked')
        },

        parentCheckbox3: {
            familyR: $('#event-topic-3').is(':checked'),
            attachment: $('#attachment').is(':checked'),
            relationshipB: $('#relationship').is(':checked')
        },

        parentCheckbox4: {
            familyC: $('#event-topic-4').is(':checked'),
            separation: $('separation').is(':checked'),
            mulChallenge: $('challenges').is(':checked'),
            childrenCare: $('#children_care').is(':checked'),
            parentsCare: $('#parents_care').is(':checked')
        },

        parentCheckbox5: {
            supportGroup: $('#event-topic-5').is(':checked'),
            subSupportGroup: $('#support_groups').is(':checked')
        },

        parentCheckbox6: {
            community: $('#event-topic-6').is(':checked'),
            communityEvent: $('#community_event').is(':checked'),
            communityNotice: $('#community_notice').is(':checked')
        }
    }

    let searchItemContent3 = {
        infants: $('#infants').is(':checked'),
        toddlers: $('#toddlers').is(':checked'),
        children1: $('#children1').is(':checked'),
        children2: $('#children2').is(':checked'),
        tween: $('#tween').is(':checked')
    }

    let searchItemContent4 = {
        postcode: $('#suburb').val(),
        proximity: $('#range').val(),
        districtSelect: $('#district').val()
    }

    let searchItemContent5 = {
        fromDate: $('#from_date').val(),
        toDate: $('#to_date').val(),
        sun: $('#sun').val(),
        mon: $('#mon').val(),
        tue: $('#tue').val(),
        wed: $('#wed').val(),
        thu: $('#thu').val(),
        fri: $('#fri').val(),
        sat: $('#sat').val(),
        preferTime1: $('#morning').val(),
        preferTime2: $('#afternoon').val(),
        preferTime3: $('#evening').val()
    }

    let searchItemContent6 = {
        aboriginal: $('#aboriginal').is(':checked'),
        parentAboriginal: $('#aboriginal_parents').is(':checked'),
        additionalNeed: $('#additional_need').is(':checked'),
        divorcedParent: $('#parent_divorce').is(':checked'),
        mulFamilies: $('#multiculture').is(':checked'),
        kinship: $('#kinship').is(':checked'),
        LGBTIParent: $('#LGBIT_parent').is(':checked'),
        grandparent: $('#grandparent').is(':checked'),
        youngParents: $('#young_parent').is(':checked'),
        youngFathers: $('#young_father').is(':checked'),
        youngMothers: $('#young_mother').is(':checked'),
        mothers: $('#mother').is(':checked'),
        father: $('#father').is(':checked'),
    }

    let searchItemContent7 = {
        languages: $('#country').val()
    }

    let result = {
        result1: searchItemContent1,
        result2: searchItemContent2,
        result3: searchItemContent3,
        result4: searchItemContent4,
        result5: searchItemContent5,
        result6: searchItemContent6,
        result7: searchItemContent7
    }

    console.log(result);

})

// ends-here
