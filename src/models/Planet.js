const mongoose = require('mongoose');

const Planet = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            unique: true
        },
        filmesAparicoes: Number,
        clima: [String],
        terreno: [String]
    },
    {
    timestamps: true}
);

module.exports = mongoose.model('Planet', Planet);