const express = require("express");
const router = express.Router();
const passport = require('passport');
const Liquid = require('../../models/Liquid');
const validateLiquidInput = require('../../validation/liquids');

router.get("/test", (req, res) => res.json({ msg: "This is the liquids route" }));

// gets all liquids, used for testing
router.get('/', (req, res) => {
    Liquid.find()
        .sort({ datetime: -1 })
        .then(liquids => res.json(liquids))
        .catch(err => res.status(404).json({ noliquidsfound: 'No liquids found' }));
});

// /api/liquids create liquid
router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateLiquidInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newLiquid = new Liquid({
            type: req.body.type,
            amount: req.body.amount,
            user: req.body.user.id 
        });

        newLiquid.save().then(tweet => res.json(tweet));
    }
);

// /api/liquids/:id delete liquid
router.delete('/:id', (req, res) => {
    Liquid.findByIdAndDelete(req.params.id)
    .then(liquid => res.json(liquid))
}
);

// /api/liquids/user/:user_id get user liquids
router.get('/user/:user_id', (req, res) => {
    Liquid.find({ user: req.params.user_id })
        .then(liquids => res.json(liquids))
        .catch(err =>
            res.status(404).json({ noliquidsfound: 'No liquids found from that user' }
            )
        );
});

module.exports = router;
