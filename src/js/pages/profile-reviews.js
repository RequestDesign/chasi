import $ from "jquery";

$(function () {
    $('.switcher-content').hide();
    $('.switcher-content[data-content="revFromClients"]').show();

    $('.switcher-rev').on('click', function () {
        $('.switcher-rev').removeClass('switcher-rev--active');
        $(this).addClass('switcher-rev--active');
        $('.switcher-content').hide();
        let switcherValue = $(this).data('switcher');
        $('.switcher-content[data-content="' + switcherValue + '"]').show();
    })
})