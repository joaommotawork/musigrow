'use strict';

/**
 * news service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news.news');
