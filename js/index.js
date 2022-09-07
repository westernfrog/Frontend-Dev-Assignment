var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function copy() {
  var copytext = document.getElementById("copyUrl");
  copytext.select();
  $(".button").attr("title", "Copied!").tooltip("show");
}
