var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
console.log(req.body.dateOfBirth)
res.render(  'card', {
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  type: req.body.type,
  dateOfBirth: new Date(req.body.dateOfBirth),
  addressLine1:req.body.addressLine1,
  addressLine2:req.body.addressLine2,
  city: req.body.city,
  state: req.body.state,
  zip: req.body.zip,
  accountNumber: createAccountNumber(),
  currentDate: new Date()
});
module.exports = router;

function creatAccountNumber(){
  let accNum = ""

}
