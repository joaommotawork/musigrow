'use strict';

/**
 *  news controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::news.news');
