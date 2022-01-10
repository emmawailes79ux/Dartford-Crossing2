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

// Landing page 01 //

router.post('/v01/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
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
  res.redirect(`/v04/resolve-pcn//challengeSummary`);
});

router.get("/v04/resolve-pcn/flow14", function (req, res) {
  res.redirect(`/v04/resolve-pcn//challengePCNchange`);
});

router.get("/v04/resolve-pcn/flow15", function (req, res) {
  res.redirect(`/v04/resolve-pcn//pcnChallengeReasonsChange`);
});

router.get("/v04/resolve-pcn/flow16", function (req, res) {
  res.redirect(`/v04/resolve-pcn//supportingEvidenceChange`);
});

router.get("/v04/resolve-pcn/flow17", function (req, res) {
  res.redirect(`/v04/resolve-pcn//challengeConfirm`);
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

// one off payment
router.post("/v04/one-off-payment/pay-crossing", function (req, res) {
  
    res.redirect("/v04/one-off-payment/vehicle-info");
  
});

module.exports = router