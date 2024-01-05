import $ from "jquery";
import IMask from "imask";
import { startTimer, destroyTimer, resetTimer } from "./send-code-timer";

function applyIMask() {
    IMask(document.getElementById("phoneInput"), {
        mask: "+{7}(000)000-00-00",
    });

    // IMask(document.getElementById("newPhoneInput"), {
    //     mask: "+{7}(000)000-00-00",
    // });
}

//input city dropdown list start
let cityListArray = ["Анапа", "Ангарск", "Анжеро-Судженск", "Благовещенск", "Владимир", "Геленджик", "Дзержинск", "Жуков", "Зеленогорск", "Липецк", "Магнитогорск", "Москва"];
const $cityList = $(".city-list");
$.each(cityListArray, function (index, city) {
    const $liElement = $("<li>").addClass("city-list__item").text(city);
    $cityList.append($liElement);
});

//show city dropdown
$("#cityInput").on("input", function () {
    const cityInputValue = $(this).val().trim().toLowerCase();
    const hasInput = cityInputValue.length > 0;
    $cityList.toggle(hasInput);

    $cityList.children().each(function () {
        const $liElement = $(this);
        const cityName = $liElement.text().toLowerCase();
        const index = cityName.indexOf(cityInputValue);

        $liElement.toggle(index !== -1);
        $liElement.attr("data-index", index);
    });

    //sort the list by index
    const listItems = $cityList.children(".city-list__item").get();
    listItems.sort(function (a, b) {
        const indexA = parseInt($(a).attr("data-index")) || 0;
        const indexB = parseInt($(b).attr("data-index")) || 0;
        return indexA - indexB;
    });

    $cityList.empty().append(listItems);
});

//handle click on city item
$cityList.on("click", ".city-list__item", function () {
    const selectedCity = $(this).text();
    $("#cityInput").val(selectedCity);
    $cityList.hide();
});

//hide city list if click outside
$(document).on("click", function (e) {
    const $target = $(e.target);

    if (!$target.closest("#cityInput").length && !$target.closest(".city-list").length) {
        $cityList.hide();
    }
});

//check input and make btn active function
function isInputValid(input, btn) {
    const isInputValid = input.val().trim() !== "";
    btn.prop("disabled", !isInputValid);
}

//stages function
$(function () {
    let contactType = "email";

    function resetSignupFormFields() {
        $("#emailInput, #phoneInput, #regCode, #passwordInput, #repeatPasswordInput, #nameInput, #surnameInput, #cityInput").val("");
        $(".signup-modal .btn").prop("disabled", true);
        contactType = "email";
        destroyTimer();
    }

    $('[data-modal="signup-modal"]').on("click", () => {
        $(".login-modal").removeClass("active");
        $(".signup-modal").addClass("active");
        applyIMask();
        resetSignupFormFields();
        showFirstStage();
    });

    // Make btn active on input
    $(document).on("input", ".auth-modal-content__input", function () {
        isInputValid($(this), $("#continueRegButton"));
    });

    //first stage
    function showFirstStage() {
        $(".signup-first-stage").show();
        $(".signup-second-stage, .signup-third-stage, .signup-fourth-stage").hide();
        $("#signupInfo").text("Создайте аккаунт, чтобы пользоваться всеми возможностями сервиса");

        //reg by email is active
        $(".switcher-content").hide().filter('[data-input="emailReg"]').show();
        $(".switcher--signup").removeClass("switcher--active").filter('[data-switcher="emailReg"]').addClass("switcher--active");

        //click on switchers
        $(".switcher--signup").on("click", function () {
            const $this = $(this);
            const switcherType = $this.data("switcher");

            if (!$this.hasClass("switcher--active")) {
                $(".switcher--signup").removeClass("switcher--active");
                $this.addClass("switcher--active");
                $(".switcher-content").hide().filter(`[data-input='${switcherType}']`).show();
                $(".switcher-content").not(`[data-input='${switcherType}']`).find(".auth-modal-content__input").val("");
            }

            //make btn active
            isInputValid($(`[data-input='${switcherType}']`).find(".auth-modal-content__input"), $("#continueRegButton"));
        });

        //handle click on continueRegButton
        $("#continueRegButton").on("click", function () {
            $("#emailInputDisabled").val($("#emailInput").val());
            $("#phoneInputDisabled").val($("#phoneInput").val());
            showSecondStage();
        });
    }

    //second stage
    function showSecondStage() {
        $(".signup-second-stage").show();
        $(".signup-first-stage, .signup-third-stage, .signup-fourth-stage").hide();
        $('.switcher--signup ').off()

        if ($("#emailInputDisabled").val() && !$("#phoneInputDisabled").val()) {
            //show email input
            contactType = "email";
            $('[data-switcher="emailReg"]').addClass("switcher--active");
            $("#signupInfo").text(`Для подтверждения регистрации введите код, который мы отправили на почту ${$("#emailInputDisabled").val()}`);
            $("#emailInputDisabled").parent().show();
            $("#phoneInputDisabled").parent().hide();
        } else if (!$("#emailInputDisabled").val() && $("#phoneInputDisabled").val()) {
            //show phone input
            contactType = "phone";
            $('[data-switcher="phoneReg"]').addClass("switcher--active");
            $("#signupInfo").text(`Для подтверждения регистрации введите код, который мы отправили на номер ${$("#phoneInputDisabled").val()}`);
            $("#emailInputDisabled").parent().hide();
            $("#phoneInputDisabled").parent().show();
        }

        $("#regCode").on("input", function () {
            $("#confirmCodeButton").prop("disabled", !($("#regCode").val().trim() !== ""));
        });

        //handle click on confirmCodeButton
        $("#confirmCodeButton").on("click", function () {
            showThirdStage();
            destroyTimer()
        });

        resetTimer();
    }

    //third stage
    function showThirdStage() {
        $(".signup-third-stage").show();
        $(".signup-first-stage, .signup-second-stage, .signup-fourth-stage").hide();
        $("#signupInfo").text("Придумайте пароль");

        $("#passwordInput, #repeatPasswordInput").on("input", function () {
            if ($("#passwordInput").val() != "" && $("#repeatPasswordInput").val() != "" && $("#passwordInput").val() === $("#repeatPasswordInput").val()) {
                $("#confirmPasswordButton").prop("disabled", false);
            } else {
                $("#confirmPasswordButton").prop("disabled", true);
            }
        });

        //handle click on confirmPasswordButton
        $("#confirmPasswordButton").on("click", function () {
            showFourthStage();
        });
    }

    //fourth stage
    function showFourthStage() {
        $(".signup-fourth-stage").show();
        $(".signup-first-stage, .signup-second-stage, .signup-third-stage").hide();
        $("#signupInfo").text("Заполните данные для регистрации");

        //hide one of inputs according to contact type from first stage
        // if (contactType === "email") {
        //     $("#newEmailInput").parent().hide();
        //     $("#newPhoneInput").parent().show();
        // } else if (contactType === "phone") {
        //     $("#newPhoneInput").parent().hide();
        //     $("#newEmailInput").parent().show();
        // }

        //check inputs and make signUpButton active
        const $userDataInputs = $("#nameInput, #surnameInput, #cityInput");
        $userDataInputs.on("input", function () {
            const isPersonalInfoValid = $("#nameInput").val().trim() !== "" && $("#surnameInput").val().trim() !== "" && $("#cityInput").val().trim() !== "";
            // const isNewContactProvided = $("#newEmailInput").val().trim() !== "" || $("#newPhoneInput").val().trim() !== "";

            $("#signUpButton").prop("disabled", !(isPersonalInfoValid));
        });

        //handle click on signUpButton
        $("#signUpButton").on("click", function () {
            $(".signup-modal").removeClass("active");
            $("body").removeClass("lock");
            resetSignupFormFields();
        });
    }
});
