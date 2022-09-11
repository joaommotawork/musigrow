'use strict';

/**
 * songs service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::songs.songs');
