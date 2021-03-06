const Planet = require('../models/Planet');
const request = require('request');

class PlanetController {
    
    async getFilmeAparicao(planetName) {
        return new Promise(function (resolve, reject) {
            request(`https://swapi.co/api/planets/?search=${planetName}`, function (err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    let planeta = JSON.parse(body).results.find(p => p.name.toLowerCase() == planetName.toLowerCase());

                    if (planeta == null || planeta == undefined)
                        resolve(0);
                    else
                        resolve(planeta.films.length);
                }
            });
        });
    }

    async postPlanet(req, res, next) {
        try {
            const planetName = req.body.nome;

            var planet = await Planet.find({ nome: planetName.toLowerCase() });

            if (planet.length > 0)
                res.status(400).json({ success: false, error: `Planeta '${planetName}' já está cadastrado.` });
            else {
                const filmesAparicaoPromise = this.getFilmeAparicao(planetName);
                filmesAparicaoPromise.then(function (result) {

                    planet = Planet.create(
                        {
                            nome: planetName.toLowerCase(),
                            clima: req.body.clima,
                            terreno: req.body.terreno,
                            filmesAparicoes: result
                        });

                    return planet;

                }, function (err) {
                    res.status(400).json({ success: false, error: err.message });
                }).then(function (result) {

                    res.json(result);
                });
            }
        } catch (error) {
            res.status(400).json( { success: false, error: error.message} );
        }
    }

    async getPlanets(req, res) {
        try {
            const planets = await Planet.find().sort('nome');
        
            return res.json({ success: true, planets });
        }
        catch (error) {
            res.status(400).json( {success: false, error: error.message} );
        }
    }

    async getPlanetById(req, res) {

        try {
            const planet = await Planet.findById(req.params.id);

            if (!planet)
                return res.status(404).json({ success: false, error: `Planeta id=${req.params.id} não encontrado.` });
            else
                return res.json({ success: true, planet });

        } catch (error) {
            return res.status(400).json({ success: false, error: error.message });
        }
    }

    async getPlanetByName(req, res) {
        try {
            let planet = await Planet.find({ nome: req.params.nome.toLowerCase() });

            if (planet && planet.length > 0)
                return res.json({ success: true, planet });
            else
                return res.status(404).json({ success: false, error: `Planeta ${req.params.nome.toLowerCase()} não encontrado.` });

        } catch (error) {
            return res.status(400).json({ success: false, error: error.message });
        }
    }

    async deletePlanet(req, res) {
        try {
            let planet = await Planet.findOne({ nome: req.params.nome.toLowerCase() });

            if (!planet) {
                res.status(404).json({ success: false, error: 'Planeta não encontrado.' });
            }
            else {
                await Planet.deleteOne({ nome: planet.nome });

                res.json({ success: true, message: `Planeta ${planet.nome} removido com sucesso.` });
            }

        } catch (error) {
            return res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = new PlanetController();