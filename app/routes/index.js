const express = require('express');
const router = express.Router();
const player = require('./playerRoutes');
const competition = require('./compRoutes');
const game = require('./gameRoutes');
const account = require('./accountRoutes');

module.exports = (app) => {

	// Handle for the player routes
    router.use('/', account);

    // Handle for the player routes
    router.use('/', player);

    // Handle for the competition routes
    router.use('/', competition);

    // Handle for the game routes
    router.use('/', game);

    // Expose them to the rest of the application
    app.use('/', router);

}
