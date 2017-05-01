const express = require('express');
const router = express.Router();
const accountModel = require('../models/accountModel');

router.route('/account')
    .post((request, res) => {
    	const account = new accountModel(request.body);
        account.save((err, accounts) => {
            if (err) {
                return res.send(err);
            }
            return res.send(accounts);
        });
    })

    //update password (change old password)
    .put((request, res) => {
        
        accountModel.findOneAndUpdate(
            { 'email': request.body.email,'password':request.body.oldPassword },
            { $set: { 'password':request.body.newPassword } },
            { new:true }, (err, account) => {
            if (err) {
                return res.send(err);
            }
            return res.send(account);
            
        });
    });


//email
router.route('/acc/:email')
    .get((request, res) => {
        accountModel.findOne({ 'email': request.params.email}, {}, (err, acc) => {
            if (err) {
                return res.send(err);
            }
            return res.send(acc);
        });
    });

router.route('/account/:email/:password')
    .get((request, res) => {
        accountModel.findOne(
            { 'email': request.params.email, 'password': request.params.password }, (err, account) => {
            if (err) {
                return res.send(err);
            }
            return res.send(account);
            
        });

    });




//money "parior" ...
router.route('/money')
    .put((request, res) => {
        
        accountModel.findOneAndUpdate(
            { '_id': request.body.user_id },
            { $inc: { 'money':request.body.money } },
            { new:true }, (err, account) => {
            if (err) {
                return res.send(err);
            }
            return res.send(account);
            
        });
    });

module.exports = router;