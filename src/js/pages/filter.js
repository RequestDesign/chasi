import $ from "jquery";
import IMask from "imask";

if($('.filter').length) {
    const maskPriceFrom = IMask(document.getElementById("price-from"),   {
        // mask: 'от num',
        mask: 'num',
        blocks: {
          num: {
            // nested masks are available!
            mask: Number,
            thousandsSeparator: ' '
          }
        }
    });
    const maskPriceTo = IMask(document.getElementById("price-to"),   {
        // mask: 'до num',
        mask: 'num',
        blocks: {
          num: {
            // nested masks are available!
            mask: Number,
            thousandsSeparator: ' '
          }
        }
    });

    // const maskDateFrom = IMask(document.getElementById("date-from"),   {
    //     mask: 'от num',
    //     blocks: {
    //       num: {
    //         mask: Date,
    //         min: new Date(1937, 0, 1),
    //         max: new Date(2023, 0, 1),
    //         lazy: false
    //       }
    //     }
    // });


        // const maskDateTo = IMask(document.getElementById("date-to"),   {
    //     mask: 'до num',
    //     blocks: {
    //       num: {
    //         mask: Date,
    //         min: new Date(1937, 0, 1),
    //         max: new Date(2023, 0, 1),
    //         lazy: false
    //       }
    //     }
    // });
    let maskDateFrom
    if(document.getElementById("date-from")) {
        maskDateFrom = IMask(document.getElementById("date-from"), {
            // mask: 'от YYYY',
            mask: 'YYYY',
            blocks: {
                YYYY: {
                    mask: IMask.MaskedRange,
                    from: 1937,
                    to: new Date().getFullYear()
                }
            }
        });
    }

    let maskDateTo
    if(document.getElementById("date-to")) {
        maskDateTo = IMask(document.getElementById("date-to"), {
            // mask: 'до YYYY',
            mask: 'YYYY',
            blocks: {
                YYYY: {
                    mask: IMask.MaskedRange,
                    from: 1937,
                    to: new Date().getFullYear()
                }
            }
        });
    }

    
    // document.getElementById("date-from").addEventListener('input', () => {
    // let year = document.getElementById("date-from").value.match(/\d+/)

    //     console.log(year),
    //     document.getElementById("date-to").value=''
    //     const maskDateTo = IMask(document.getElementById("date-to"), {
    //         mask: 'до YYYY',
    //         blocks: {
    //             YYYY: {
    //                 mask: IMask.MaskedRange,
    //                 from: year[0],
    //                 to: new Date().getFullYear()
    //             }
    //         }
    //     });

    // })


    function filterShowed() {
        if($('.filter__container').find("input:checked").length || $('.filter__item_numbers').find("input").is(":hasValue")) {
            $('.filter__title').addClass('showed')
            $('.filter__btn').addClass('active')
        } else {
            $('.filter__title').removeClass('showed')
            $('.filter__btn').removeClass('active')
        }
    }

    document.querySelector('.filter__btn button').addEventListener('click', (e) => {
        e.preventDefault()
        if(document.querySelector('.filter__btn').classList.contains('active')) {
            $('.filter__left').removeClass('open')
        }
    })

    $.expr[':'].hasValue = function(el,index,match) {
        return el.value != "";
    };
    $('.filter__dropdown_top').on('click', function (evt) {
        $('.filter__blur').toggleClass('active')
        $(this).closest('.filter__dropdown').toggleClass('active')
        $(this).closest('.filter__dropdown').find('.filter__dropdown_bottom').slideToggle()
    })
    $('.filter__container').find("input").on('change', function() {
        filterShowed()
    });
    $('.filter__item_numbers').find("input").on('keyup', function() {
        filterShowed()
    });
    $('.filter__dropdown_header_cancel').on('click', function (evt) {
        $(this).closest('.filter__dropdown').find("input:checked").prop("checked", false)
    })
    $('.filter__dropdown_header svg').on('click', function (evt) {
        $('.filter__blur').toggleClass('active')
        $(this).closest('.filter__dropdown').toggleClass('active')
        $(this).closest('.filter__dropdown').find('.filter__dropdown_bottom').slideToggle()
    })
    $('.filter__blur').on('click', function (evt) {
        $('.filter__blur').toggleClass('active')
        $('.filter__dropdown').each(function(){
            if($(this).hasClass('active')) {
                $(this).toggleClass('active')
                $(this).find('.filter__dropdown_bottom').slideToggle()
            }
        })
    })
    $('.filter__clear-all').on('click', function (evt) {
        $('.filter__container').find("input:checked").prop("checked", false)
        $('.filter__item_numbers').find("input").val('')
        maskPriceFrom.updateValue("");
        maskPriceTo.updateValue("");
        maskDateFrom.updateValue("");
        maskDateTo.updateValue("");
        filterShowed()
    })
    $(".filter__dropdown_search input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).closest('.filter__dropdown_bottom').find(".filter__dropdown_item").filter(function() {
          $(this).toggle($(this).find('span').text().toLowerCase().indexOf(value) > -1)
        });
        if(value.length) {
            $(this).siblings('.filter__dropdown_search_cancel').css('opacity', 1)
        } else {
            $(this).siblings('.filter__dropdown_search_cancel').css('opacity', 0)
        }
    });
    $('.filter__dropdown_search_cancel').on('click', function (evt) {
        $(this).siblings('input').val('')
        $(this).siblings('input').closest('.filter__dropdown_bottom').find(".filter__dropdown_item").filter(function() {
            $(this).toggle($(this).find('span').text().toLowerCase().indexOf('') > -1)
        });
        $(this).css('opacity', 0)
    })
    
    $('.header__filter').on('click', function (evt) {
        evt.preventDefault()
        $('.filter__left').addClass('open')
    })
    $('.filter__title svg').on('click', function (evt) {
        $('.filter__left').removeClass('open')
    })
    $('.filter__hidden_bottom').on('click', function (evt) {
        $(this).closest('.filter__hidden').find('.filter__hidden_top').slideToggle()
        $(this).css('display', 'none')
    })

    
    $('.main-page__sorting_top').on('click', function (evt) {
        $('.filter__blur').toggleClass('active')
        $(this).closest('.main-page__sorting').toggleClass('active')
    })
    $('.main-page__sorting_bottom_head svg').on('click', function (evt) {
        $('.filter__blur').removeClass('active')
        $('.main-page__sorting').removeClass('active')

    })
    $('.main-page__sorting_bottom_item input').on('change', function (evt) {
        $(this).closest('.main-page__sorting_bottom_item').find('span').text()
        $(this).closest('.main-page__sorting').find('.main-page__sorting_top').find('span').text($(this).closest('.main-page__sorting_bottom_item').find('span').text())
        $(this).closest('.main-page__sorting').removeClass('active')
    })
    $(document).on('click', function (e) {
        if ($(e.target).closest(".main-page__sorting").length === 0) {
            $('.main-page__sorting').removeClass('active')
        }
    });
}