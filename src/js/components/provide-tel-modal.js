import $ from "jquery";
import IMask from "imask";
import { startTimer, destroyTimer, resetTimer } from "./send-code-timer";

function applyIMask() {
    IMask(document.getElementById("changeTelInput"), {
        mask: "+{7}(000)000-00-00",
    });
}

$(function () {
    function resetChangeTelFormFields() {
        $("#changeTelInput, #changeTelInputDisabled, #codeTelInput").val("");
        $(".change-tel-modal .btn").prop("disabled", true);
        destroyTimer();
    }

    $('[data-modal="provide-tel"]').on("click", () => {
        $(".provide-tel-modal").addClass("active");
        applyIMask();
        resetChangeTelFormFields();
        showFirstChangeTelStage();
    });

    function showFirstChangeTelStage() {
        $(".change-tel-first-stage").show();
        $(".change-tel-second-stage").hide();

        $("#changeTelInput").on("input", function () {
            $("#sendCodeOnTelButton").prop("disabled", !($("#changeTelInput").val().trim().match(/\d/g).length === 11))
            // $("#sendCodeOnTelButton").prop("disabled", !($("#changeTelInput").val().trim() !== ""));
        });

        //handle click on sendCodeOnTelButton
        $("#sendCodeOnTelButton").on("click", function () {
            $("#changeTelInputDisabled").val($("#changeTelInput").val());
            showSecondChangeTelStage();
        });
    }

    function showSecondChangeTelStage() {
        $(".change-tel-second-stage").show();
        $(".change-tel-first-stage").hide();
        resetTimer();

        //close modal on 4 symbols in #codeTelInput
        $("#codeTelInput").on("input", function () {
            if ($(this).val().trim().length === 4) {
                $(".provide-tel-modal").removeClass("active");
                $("body").removeClass("lock");
                $("#profileTel").text($("#changeTelInput").val());
                resetChangeTelFormFields();
                destroyTimer();

                $(".pop-up").addClass("showed");
                $(".pop-up__text").text("Телефон подтвержён");
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
