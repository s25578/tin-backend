function validatePlanetName(planetName) {
    return /^[a-zA-Z0-9 ]+$/.test(planetName);
}

function validatePlanetRadius(planetRadius) {
    const minRadius = 1000;
    const maxRadius = 200000;
    return planetRadius >= minRadius && planetRadius <= maxRadius;
}

module.exports = {
    validatePlanetName,
    validatePlanetRadius
};
