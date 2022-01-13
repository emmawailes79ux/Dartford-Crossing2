/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  $.fn.goBack = () => {
    history.go(-1); event.preventDefault();
  }; 
  $(".govuk-back-link").click(function () {
    $.fn.goBack();
  });
})
$("[id='vrn']").click(() => {
  $("[id='vrn']").val("LO62 NRO");
});
$("[id='plateSubmit']").mouseover(() => {
  let kros = $("[id='kros']")
  let krosCount = $("[id='krosCount']")
  if ($("[id='vrn']").val()===""){
  $("[id='vrn']").val("LO62 NRO");
  kros.val("3 (2 Southbound, 1 Northbound)");
  }else if ($("[id='vrn']").val()==="LO65 NRO"){
        kros.val("2 (1 Southbound, 1 Northbound)");
    }
  krosCount.val(parseInt(kros.val().split(" ")[0]))
  $("[id='krosCountPay']").val("£"+(krosCount.val()*2.50).toFixed(2));
});

$('#notifOptMssg').val('You did not opt in to receive notifications about future crossings. Please always remember to pay on time.');
          
// Returns yes or no in textbox1
// when checked and unchecked
$('#notif-opt').click(function() {
if ($("#notif-opt").is(":checked") == true) {
  $('#notifOptMssg').val(`Thank you for registering for notifications. We will send these by email [and text message]. The notifications explain how to unsubscribe if you want to. We will notify you when:
  <ul> <li>you need to make a payment for a crossing</li>
  <li>you make a crossing you have already paid for so you know how much balance you have left</li></ul>`);
  } else {
  $('#notifOptMssg').val('You did not opt in to receive notifications about future crossings. Please always remember to pay on time.');
  }
  });