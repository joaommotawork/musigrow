'use strict';

/**
 * instruments router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::instruments.instruments');
