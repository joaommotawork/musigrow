'use strict';

/**
 *  instruments controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::instruments.instruments');
