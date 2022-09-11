'use strict';

/**
 *  songs controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::songs.songs');
