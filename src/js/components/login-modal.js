import $ from "jquery";
import IMask from "imask";

$(function () {
    function applyIMask() {
        IMask(document.getElementById("phoneLoginInput"), {
            mask: "+{7}(000)000-00-00",
        });
    }

    $('[data-modal="login-modal"]').on("click", () => {
        $(".signup-modal").removeClass("active");
        $(".login-modal").addClass("active");
        applyIMask();
        resetLoginFormFields();
        showEmailLoginForm();
    });

    function resetLoginFormFields() {
        $("#emailLoginInput, #phoneLoginInput, #emailLoginPasswordInput, #phoneLoginPasswordInput").val("");
        $(".auth-modal .btn").prop("disabled", true);
    }

    function showEmailLoginForm() {
        $(".switcher-content").hide().filter('[data-inputs="EmailLogin"]').show();
        $(".switcher--auth").removeClass("switcher--active").filter('[data-switcher="EmailLogin"]').addClass("switcher--active");
    }

    $(".switcher--auth").on("click", function () {
        const $this = $(this);
        const switcherType = $this.data("switcher");
        resetLoginFormFields();

        if (!$this.hasClass("switcher--active")) {
            $(".switcher--auth").removeClass("switcher--active");
            $this.addClass("switcher--active");
            $(".switcher-content").hide().filter(`[data-inputs='${switcherType}']`).show();
        }
    });

    //make loginButton active when every input in form has value
    const $forms = $("#loginByEmailForm, #loginByPhoneForm");
    function checkForm(form) {
        const inputs = form.find(".auth-modal-content__input");
        return inputs.toArray().every((input) => $(input).val().trim() !== "");
    }
    $forms.on("input", function () {
        $("#loginButton").prop("disabled", !checkForm($(this)));
    });

    //handle click on loginButton
    $("#loginButton").on("click", function () {
        $(".login-modal").removeClass("active");
        $("body").removeClass("lock");
        resetLoginFormFields();
    });

    //password eye
    $('.input-eye input').on('change', function(evt){
        if($(this).is(':checked')) {
            $(this).closest('.input-wrapper').find('input[type=password]')[0].type = 'text';
        } else {
            $(this).closest('.input-wrapper').find('input[type=text]')[0].type = 'password';
        }
    })
});
