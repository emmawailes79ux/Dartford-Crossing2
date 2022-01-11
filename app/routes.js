const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// create-start //

router.post('/v01/create-account/step4-code', function (req, res) {
  const editChoice = req.session.data['step4-code']
//if user chooses mobile authenticator redirect to app
  if (editChoice === 'authenticator-app') {
    res.redirect('/v01/create-account/2fa-app')
    //if user chooses mobile phone redirect to mobile

  } else if (editChoice === 'mobile-phone') {
    res.redirect('/v01/create-account/2fa-mobile')
  }
});

router.get('/examples/template-data', function(req, res) {
    res.render('examples/template-data', { 'name' : 'Foo' });
});
////Landing page choices //////

// Landing page 01 //
router.post('/v01/landing', function (req, res) {
  const editChoice = req.session.data['landing']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v01/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v01/create-account/create-account')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v01/resolve-pcn/payConfirm')
  }
});

// Landing page 02 //
router.post('/v02/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v02/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v02/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v02/resolve-pcn/payConfirm')
  }
});

// Landing page 03 //
router.post('/v03/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v03/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v03/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v03/resolve-pcn/payConfirm')
  }
});

// Landing page 04 //
router.post('/v04/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v04/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v04/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    //res.redirect('/v04/resolve-pcn/payConfirm')
    res.redirect('/v04/resolve-pcn/flow1')
  }
});



//router.post('/landing', function (req, res) {
//  const editChoice = req.session.data['']

//  if (editChoice === '') {
//    res.redirect('/')
//  } else if (editChoice === '') {
//    res.redirect('/')
//  } else if (editChoice === 'not') {
//    res.redirect('/v01')
//  }
//});




/////////////////////////create account v04////////////////////////
///is this your vehicle v04///

router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v04/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v04/create-account/vehicle-registration')
  }
});


//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {

  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v04/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v04/create-account/payment2b')
  }

});

///////auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v04/create-account/check-answers-auto')
  } else  if (topupoption == "manual"){
    res.redirect('v04/create-account/check-answers-manual')
  }
});



/////////////////////////one off payment flow////////////////////////
// one off payment
router.post("/v04/one-off-payment/pay-crossing", function (req, res) {
  
  res.redirect("/v04/one-off-payment/vehicle-info");

});

/////////////////////////resolve pcn////////////////////////
// Resolve PCN
router.get("/v04/resolve-pcn/flow1", function (req, res) {
  res.redirect('/v04/resolve-pcn/landingRemod');
});

router.get("/v04/resolve-pcn/flow2", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemod`);
});

router.get("/v04/resolve-pcn/flow2Alt", function (req, res) {
  res.redirect(`/v04/resolve-pcn/vehicleRemodAlt`);
});

router.get("/v04/resolve-pcn/flow4", function (req, res) {
  res.redirect(`/v04/resolve-pcn/outstandingRemod`);
});

router.get("/v04/resolve-pcn/flow5b", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details`);
});

router.get("/v04/resolve-pcn/flow5a", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcn_details_b`);
});

router.get("/v04/resolve-pcn/flow5details", function (req, res) {
  res.redirect(`/v04/resolve-pcn//pcnDetails`);
});

router.get("/v04/resolve-pcn/flow6", function (req, res) {
  res.redirect(`/v04/resolve-pcn//payDetails`);
});

router.get("/v04/resolve-pcn/flow6details", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnDetailsPay`);
});

router.get("/v04/resolve-pcn/flow7", function (req, res) {
  res.redirect(`/v04/resolve-pcn//confirmPay`);
});

router.get("/v04/resolve-pcn/flow8", function (req, res) {
  res.redirect(`/v04/resolve-pcn/payConfirm`);
});

router.get("/v04/resolve-pcn/flow9", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNremod`);
});

router.get("/v04/resolve-pcn/flow10", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasons`);
});

router.get("/v04/resolve-pcn/flow11", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidence`);
});

router.get("/v04/resolve-pcn/flow13", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeSummary`);
});

router.get("/v04/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengePCNchange`);
});

router.get("/v04/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v04/resolve-pcn/pcnChallengeReasonsChange`);
});

router.get("/v04/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v04/resolve-pcn/supportingEvidenceChange`);
});

router.get("/v04/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v04/resolve-pcn/challengeConfirm`);
});

router.get("/information/charges-fines", function (req, res) {
  res.render(`/v04/information/charges-fines`);
});


module.exports = router
