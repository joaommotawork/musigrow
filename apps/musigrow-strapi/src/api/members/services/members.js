'use strict';

/**
 * members service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::members.members');
