'use strict';

/**
 * songs router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::songs.songs');
