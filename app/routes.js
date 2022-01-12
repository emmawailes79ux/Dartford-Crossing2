const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Create a section for the screens the routes will be for

//////////////////Landing page choices //////////////////////////////////////

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
    res.redirect('/v04/resolve-pcn/payConfirm')
  }
});

// Landing page 05 //
router.post('/v05/landing', function (req, res) {
  const editChoice = req.session.data['start-choose']
  if (editChoice === 'one-off-payment') {
    res.redirect('/v05/one-off-payment/pay-crossing')
  } else if (editChoice === 'create-account') {
    res.redirect('/v05/create-account/create-start')
  }
  else if (editChoice === 'resolve-pcn') {
    res.redirect('/v05/resolve-pcn/payConfirm')
  }
});


/////////////////////////create account v04///////////////////////////////

///is this your vehicle v04///
router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v05/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v05/create-account/vehicle-registration')
  }
});

//////Top up - payment1 v04///
router.post('/CheckPaymentOption', function (req, res) {
  var payoption = req.session.data['type-choose']
  if (payoption == "Prepay"){
    // Send user to Prepay page
    res.redirect('v05/create-account/payment2')
  } else  if (payoption == "PAYG"){
    // Send user to PAYG page
    res.redirect('v05/create-account/payment2b')
  }

});


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v05/create-account/check-answers-auto')
  } else  if (topupoption == "manual"){
    res.redirect('v05/create-account/check-answers-manual')
  }
});


//////////////////////////Manage-account v05//////////////////////////////


/////////////////////////One off payment flow v05////////////////////////



/////////////////////////Resolve pcn v05//////////////////////////////////


/////////////////////////create account v05///////////////////////////////

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


///////Top up - auto pay or manual pay v04///////
router.post('/CheckPaymentmethod', function (req, res) {
  var topupoption = req.session.data['topup']
  if (topupoption == "auto"){
    res.redirect('v04/create-account/check-answers-auto')
  } else  if (topupoption == "manual"){
    res.redirect('v04/create-account/check-answers-manual')
  }
});


//////////////////////////Manage-account v04//////////////////////////////


/////////////////////////One off payment flow v04////////////////////////



/////////////////////////Resolve pcn v04//////////////////////////////////



module.exports = router
