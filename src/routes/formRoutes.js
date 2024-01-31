const express = require('express');
const router = express.Router();
const { validatePlanetName, validatePlanetRadius } = require('../utils/validator');
const i18n = require('i18n');

router.post('/submit-form', (req, res) => {
    const { planetName, planetRadius } = req.body;

    if (!validatePlanetName(planetName)) {
        return res.render('error', { error: i18n.__('error_invalid_planet_name') });
    }

    if (!validatePlanetRadius(parseFloat(planetRadius))) {
        return res.render('error', { error: i18n.__('error_invalid_planet_radius') });
    }

    res.render('success', { data: req.body });
});

module.exports = router;
