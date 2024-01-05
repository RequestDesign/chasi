import $ from "jquery";
import IMask from "imask";

if($('.characteristic').length) {
    $('.characteristic__dropdown_top').on('click', function (evt) {
        $(this).closest('.characteristic__form_item').toggleClass('active')
        $('.characteristic').toggleClass('open')
    })
    $('.characteristic__dropdown_bottom_header svg').on('click', function (evt) {
        $(this).closest('.characteristic__form_item').toggleClass('active')
        $('.characteristic').toggleClass('open')
    })
    $(".characteristic__dropdown_search input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).closest('.characteristic__dropdown_bottom').find(".characteristic__dropdown_item").filter(function() {
          $(this).toggle($(this).find('span').text().toLowerCase().indexOf(value) > -1)
        });
        if(value.length) {
            $(this).siblings('.characteristic__dropdown_search_cancel').css('opacity', 1)
        } else {
            $(this).siblings('.characteristic__dropdown_search_cancel').css('opacity', 0)
        }
    });
    $('.characteristic__dropdown_search_cancel').on('click', function (evt) {
        $(this).siblings('input').val('')
        $(this).siblings('input').closest('.characteristic__dropdown_bottom').find(".characteristic__dropdown_item").filter(function() {
            $(this).toggle($(this).find('span').text().toLowerCase().indexOf('') > -1)
        });
        $(this).css('opacity', 0)
    })
    $('.characteristic__dropdown_item').on('click', function (evt) {
        var value = $(this).find('span').text()
        $(this).closest('.characteristic__dropdown').find('.characteristic__dropdown_top_name').text(value)
        $(this).closest('.characteristic__dropdown').find('.characteristic__dropdown_top_name').addClass('selected')
    })
    $('.characteristic__form_down_top').on('click', function (evt) {
        $(this).toggleClass('active')
        $('.characteristic__form_down_addit_closed').slideToggle()
    })
    $(document).on('click', function (e) {
        if ($(e.target).closest(".characteristic__form_item").length === 0) {
            $(".characteristic__form_item").removeClass('active')
            $('.characteristic').removeClass('open')
        }
    });
    
    $('.characteristic__photo_input').each(function (inputElement) {
        const dropZoneElement = this.closest('.characteristic__photo_add');
    
        dropZoneElement.addEventListener('click', (e) => {
            console.log(e.target);
            this.click();
        });
    
        this.addEventListener('change', (e) => {
            if (this.files.length) {
                updateProgress(dropZoneElement, this.files);
            }
        });
    
        dropZoneElement.addEventListener('drop', (e) => {
            e.preventDefault();
    
            if (e.dataTransfer.files.length) {
                this.files = e.dataTransfer.files;
                updateProgress(dropZoneElement, e.dataTransfer.files);
            }
        });
    });
    
    function updateProgress(dropZoneElement, files) {
        let progressElements = dropZoneElement.nextElementSibling;
    
        console.log(dropZoneElement);
    
        // // First time - remove the prompt
        // if (progressElements) {
        // 	progressElements.remove();
        // }
    
        
    
        Array.from(files).forEach((elem, id) => {
            let closeElement = document.createElement('div');
            closeElement.classList.add('characteristic__photo_added_close');
    
            let imgElement = document.createElement('div');
            imgElement.classList.add('characteristic__photo_added_img');
    
            let fileImgElement = document.createElement('img');
            fileImgElement.src = URL.createObjectURL(files[id]);
            imgElement.append(fileImgElement);
    
            progressElements = document.createElement('div');
            progressElements.classList.add('characteristic__photo_added');
            dropZoneElement.before(progressElements);
    
            progressElements.append(closeElement, imgElement);
        });
        findText()
    
        $('.characteristic__photo_added_close').on('click', function (evt) {
            $(this).closest('.characteristic__photo_added').remove()
            findText()
        })
    
    }
    function findText() {
        if($('.characteristic__photo_added').length) {
            if(!$('.characteristic__photo_added').find('.characteristic__photo_added_text').length) {
                let addText = document.createElement('div');
                addText.classList.add('characteristic__photo_added_text');
                addText.textContent = "Главная фотография";
                $('.characteristic__photo_added')[0].append(addText)
            }
        }
    }
    
    IMask(document.getElementById("add_price"),   {
        mask: '₽ num',
        blocks: {
          num: {
            // nested masks are available!
            mask: Number,
            thousandsSeparator: ' '
          }
        }
    });
}