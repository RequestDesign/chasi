import $ from "jquery";

$(function () {
    function resetChangePwdFormFields() {
        $("#changePasswordCurrentInput, #changePasswordNewInput, #changePasswordRepeatNewInput").val("");
        $(".change-password-modal .btn").prop("disabled", true);
    }

    $('[data-modal="change-password"]').on("click", () => {
        $(".change-password-modal").addClass("active");
        resetChangePwdFormFields();
    });

    $("#changePasswordNewInput, #changePasswordRepeatNewInput, #changePasswordCurrentInput").on("input", function () {
        if (
            $("#changePasswordCurrentInput").val() != "" &&
            $("#changePasswordNewInput").val() != "" &&
            $("#changePasswordRepeatNewInput").val() != "" &&
            $("#changePasswordNewInput").val() === $("#changePasswordRepeatNewInput").val()
        ) {
            $("#changePasswordButton").prop("disabled", false);
        } else {
            $("#changePasswordButton").prop("disabled", true);
        }
    });

    $("#changePasswordButton").on("click", function () {
        $(".change-password-modal").removeClass("active");
        $("body").removeClass("lock");
        $("#profilePassword").text($("#changePasswordNewInput").val());
        resetChangePwdFormFields();

        $(".pop-up").addClass("showed");
        $(".pop-up__text").text("Пароль успешно обновлён");
        setTimeout(() => {
            $(".pop-up").removeClass("showed");
        }, 5000);

        $(".pop-up")
            .find("svg")
            .on("click", () => {
                $(".pop-up").removeClass("showed");
            });
    });
});
