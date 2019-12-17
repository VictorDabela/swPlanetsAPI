const express = require('express');

const routes = express.Router();

const PlanetController = require('./controllers/PlanetController');

routes.post('/planets', PlanetController.postPlanet.bind(PlanetController));
routes.get('/planets', PlanetController.getPlanets);
routes.get('/planets/id/:id', PlanetController.getPlanetById);
routes.get('/planets/nome/:nome', PlanetController.getPlanetByName);
routes.delete('/planets/:nome', PlanetController.deletePlanet);

module.exports = routes;