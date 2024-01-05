import $ from "jquery";
import IMask from "imask";
import { startTimer, destroyTimer, resetTimer } from "./send-code-timer";

function applyIMask() {
    IMask(document.getElementById("resetPwdPhoneInput"), {
        mask: "+{7}(000)000-00-00",
    });
}

//check input and make btn active function
function isInputValid(input, btn) {
    const isInputValid = input.val().trim() !== "";
    btn.prop("disabled", !isInputValid);
}

$(function () {
    function resetResPwdFormFields() {
        $("#resetPwdEmailInput, #resetPwdPhoneInput, #phoneOrEmailInputDisabled, #resetPasswordCode, #newPasswordInput, #repeatNewPasswordInput").val("");
        $(".reset-password-modal .btn").prop("disabled", true);
        destroyTimer();
    }

    $('[data-modal="reset-password-modal"]').on("click", () => {
        $(".login-modal").removeClass("active");
        $(".change-password-modal").removeClass("active");
        $(".reset-password-modal").addClass("active");
        applyIMask();
        resetResPwdFormFields();
        showFirstResPwdStage();
    });

    // Make btn active on input
    $(document).on("input", ".auth-modal-content__input", function () {
        isInputValid($(this), $("#sendCodeButton"));
    });

    function showFirstResPwdStage() {
        $(".reset-password-first-stage").show();
        $(".reset-password-second-stage, .reset-password-third-stage").hide();
        $("#resetPasswordInfo").text("Введите свой номер или почту и мы отправим вам код для восстановления пароля");

        //reset pwd by email is active
        $(".switcher-content").hide().filter('[data-input="resetPwdByEmail"]').show();
        $(".switcher--reset-pwd").removeClass("switcher--active").filter('[data-switcher="resetPwdByEmail"]').addClass("switcher--active");

        //click on switchers
        $(".switcher--reset-pwd").on("click", function () {
            const $this = $(this);
            const switcherType = $this.data("switcher");

            if (!$this.hasClass("switcher--active")) {
                $(".switcher--reset-pwd").removeClass("switcher--active");
                $this.addClass("switcher--active");
                $(".switcher-content").hide().filter(`[data-input='${switcherType}']`).show();
                $(".switcher-content").not(`[data-input='${switcherType}']`).find(".auth-modal-content__input").val("");
            }

            //make btn active
            isInputValid($(`[data-input='${switcherType}']`).find(".auth-modal-content__input"), $("#sendCodeButton"));
        });

        //handle click on sendCodeButton
        $("#sendCodeButton").on("click", function () {
            $("#emailPwdInputDisabled").val($("#resetPwdEmailInput").val());
            $("#phonePwdInputDisabled").val($("#resetPwdPhoneInput").val());
            showSecondResPwdStage();
        });
    }

    function showSecondResPwdStage() {
        $(".reset-password-second-stage").show();
        $(".reset-password-first-stage, .reset-password-third-stage").hide();
        $(".switcher--reset-pwd").off();

        if ($("#emailPwdInputDisabled").val() && !$("#phonePwdInputDisabled").val()) {
            //show email input
            $('[data-switcher="resetPwdByEmail"]').addClass("switcher--active");
            $("#signupInfo").text(`Для подтверждения регистрации введите код, который мы отправили на почту ${$("#emailPwdInputDisabled").val()}`);
            $("#emailPwdInputDisabled").parent().show();
            $("#phonePwdInputDisabled").parent().hide();
        } else if (!$("#emailPwdInputDisabled").val() && $("#phonePwdInputDisabled").val()) {
            //show phone input
            $('[data-switcher="resetPwdByPhone"]').addClass("switcher--active");
            $("#signupInfo").text(`Для подтверждения регистрации введите код, который мы отправили на номер ${$("#phonePwdInputDisabled").val()}`);
            $("#emailPwdInputDisabled").parent().hide();
            $("#phonePwdInputDisabled").parent().show();
        }

        $("#resetPasswordCode").on("input", function () {
            $("#resetButton").prop("disabled", !($("#resetPasswordCode").val().trim() !== ""));
        });

        //handle click on resetButton
        $("#resetButton").on("click", function () {
            destroyTimer()
            showThirdResPwdStage();
        });

        resetTimer();
    }

    function showThirdResPwdStage() {
        $(".reset-password-third-stage").show();
        $(".reset-password-first-stage, .reset-password-second-stage").hide();
        $("#resetPasswordInfo").text("Придумайте новый пароль");

        $("#newPasswordInput, #repeatNewPasswordInput").on("input", function () {
            if ($("#newPasswordInput").val() != "" && $("#repeatNewPasswordInput").val() != "" && $("#newPasswordInput").val() === $("#repeatNewPasswordInput").val()) {
                $("#saveButton").prop("disabled", false);
            } else {
                $("#saveButton").prop("disabled", true);
            }
        });

        //handle click on resetButton
        $("#saveButton").on("click", function () {
            $(".reset-password-modal").removeClass("active");
            $("body").removeClass("lock");
            resetResPwdFormFields();
        });
    }
});