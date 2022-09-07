let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

function copyURL() {
  let copytext = document.getElementById("copyUrl");
  navigator.clipboard.writeText(copytext.innerHTML);
}
function copyID() {
  let copytext = document.getElementById("copyId");
  navigator.clipboard.writeText(copytext.innerHTML);
}
