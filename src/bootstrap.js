/**
 * Init app
 */

'use strict';

global.Promise = require('bluebird');
const logger = require('./common/logger');

logger.buildService(require('./services/RestHookService'));
logger.buildService(require('./services/RoleTopicService'));
