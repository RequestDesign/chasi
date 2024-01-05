import $ from "jquery";
import { startTimer, destroyTimer, resetTimer } from "./send-code-timer";

$(function () {
    function resetChangeEmailFormFields() {
        $("#changeEmailInput, #changeEmailInputDisabled, #codeEmailInput").val("");
        $(".change-email-modal .btn").prop("disabled", true);
        destroyTimer()
    }

    $('[data-modal="change-email"]').on("click", () => {
        $(".change-email-modal").addClass("active");
        resetChangeEmailFormFields();
        showFirstChangeEmailStage();
    });

    function showFirstChangeEmailStage() {
        $(".change-email-first-stage").show();
        $(".change-email-second-stage").hide();

        $("#changeEmailInput").on("input", function () {
            $("#sendCodeOnEmailButton").prop("disabled", !($("#changeEmailInput").val().trim() !== ""));
        });

        //handle click on sendCodeOnEmailButton
        $("#sendCodeOnEmailButton").on("click", function () {
            $("#changeEmailInputDisabled").val($("#changeEmailInput").val());
            showSecondChangeEmailStage();
        });
    }

    function showSecondChangeEmailStage() {
        $(".change-email-second-stage").show();
        $(".change-email-first-stage").hide();

        resetTimer();

        //close modal on 4 symbols in #codeEmailInput
        $("#codeEmailInput").on("input", function () {
            if ($(this).val().trim().length === 4) {
                $(".change-email-modal").removeClass("active");
                $("body").removeClass("lock");
                $("#profileEmail").text($("#changeEmailInput").val());
                resetChangeEmailFormFields();

                $(".pop-up").addClass("showed");
                $(".pop-up__text").text("Почта успешно обновлена");
                setTimeout(() => {
                    $(".pop-up").removeClass("showed");
                }, 5000);

                $(".pop-up")
                    .find("svg")
                    .on("click", () => {
                        $(".pop-up").removeClass("showed");
                    });
            }
        });
    }
});