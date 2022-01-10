/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
$("[id='vrn']").click(() => {
  $("[id='vrn']").val("LO62 NRO");
});
$("[id='plateSubmit']").mouseover(() => {
  $("[id='vrn']").val("LO62 NRO");
});