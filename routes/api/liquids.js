const express = require("express");
const router = express.Router();
const passport = require('passport');
const Liquid = require('../../models/Liquid');
const validateLiquidInput = require('../../validation/liquids');

router.get("/test", (req, res) => res.json({ msg: "This is the liquids route" }));

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLiquidInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newLiquid = new Liquid({
            type: req.body.text,
            amount: req.body.amount,
            user: req.user.id
        });

        newLiquid.save().then(tweet => res.json(tweet));
    }
);

// router.delete need delete method

module.exports = router;
