const mongoose = require('mongoose');

const HeroSchema = mongoose.Schema({
    codeName: String,
    rank: String,
    acceptSokoviaAccords: Boolean,
    active: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Hero', HeroSchema);
