const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

////Landing page choices//////

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

/////////////////////////create account////////////////////////
///is this your vehicle///

router.post('/awcheck', function (req, res) {
  var editChoice = req.session.data['vehicle-check']
  if (editChoice == "yes"){
    res.redirect('v04/create-account/email')
  } else if (editChoice === "no"){
    res.redirect('v04/create-account/vehicle-registration')
  }
});


//////Top up - payment1///


///router.post('v04/create-account/payment1', function (req, res) {
///  const editChoice = req.session.data['topup']
///  if (editChoice === 'Prepay') {
//    res.redirect('v04/create-account/payment2')
//  } else if (editChoice === 'PAYG') {
//    res.redirect('v04/create-account/payment2b')
//  }
//});


/////////////////////////one off payment flow////////////////////////


/////////////////////////resolve pcn////////////////////////



module.exports = router
