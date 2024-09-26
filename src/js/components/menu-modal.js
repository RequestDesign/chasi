import $ from "jquery";

$('[data-modal="menu-modal"]').on("click", () => {
  $(".menu-modal").addClass("active");
});
