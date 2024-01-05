import $ from "jquery";
import Cropper from "cropperjs";

if($('.profile').length) {
    $('.profile__img_set').on('click', () => {
        $('.profile__img_menu').slideToggle();
    });
    
    $(document).on('click', function (e) {
        if ($(e.target).closest(".profile__img").length === 0 && $(".profile__img_menu").css('display') == 'block') {
            $(".profile__img_menu").slideToggle()
        }
    });

    let photoCreating = document.querySelector('#photoCreating');
    let imagesExtentions = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

    function getRoundedCanvas(sourceCanvas) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var width = sourceCanvas.width;
        var height = sourceCanvas.height;
        
        canvas.width = width;
        canvas.height = height;
        context.imageSmoothingEnabled = true;
        context.drawImage(sourceCanvas, 0, 0, width, height);
        context.globalCompositeOperation = 'destination-in';
        context.beginPath();
        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
        context.fill();
        return canvas;
    }

    $('.profile__img_item input').on('change', function (e) {
        if (e.target.files.length) {
            if (imagesExtentions.includes(e.target.files[0].type)) {
                
                let img = document.createElement('img');
                img.id = 'photoCreating';
                img.src = URL.createObjectURL($(this)[0].files[0])
                $('.photo-modal__img')[0].appendChild(img);
                let cropperAvatar = new Cropper(img, {
                    dragMode: 'move',
                    aspectRatio: 1,

                    center: false,
                    cropBoxMovable: false,
                    cropBoxResizable: false,
                    guides: false,

                    ready: function (event) {

                        this.cropperAvatar = cropperAvatar;
                    },
                });
                $('#cropImg').on('click',function(){
                    let croppedImage = getRoundedCanvas(cropperAvatar.getCroppedCanvas()).toDataURL()

                    $('.profile__img_set img')[0].src = croppedImage
                    $('.photo-modal').removeClass('active')
                    $('.photo-modal__img').find('.cropper-container').remove()
                    $('.photo-modal__img').find('#photoCreating').remove()
                    $('.profile__img_delete').removeClass('hidden')
                    $('.profile__img').removeClass('empty')
                })
            }
        }
    })

    $('.profile__form_choose').on('change', function (e) {
        $(this).closest('.profile__form_item').find('.profile__form_choosed').text($(this).siblings('span').text())
        $(this).closest('.profile__form_item').find('.profile__form_name').addClass('active')
        $(this).closest('.profile__form_item').removeClass('open')
        $('.dropdown__blur').removeClass('open')
    })
    $('.profile__form_item_bottom_head svg').on('click', function (e) {
        $(this).closest('.profile__form_item').removeClass('open')
        $('.dropdown__blur').removeClass('open')
    })

    $(".profile__form_item_bottom_search-input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).closest('.profile__form_item_bottom').find(".profile__form_item_bottom_item").filter(function() {
          $(this).toggle($(this).find('span').text().toLowerCase().indexOf(value) > -1)
        });
    });
}
