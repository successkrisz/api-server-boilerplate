import config from 'config';
import _debug from 'debug';
import mongoose from 'mongoose';

const debug = _debug('app:db');
const _options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

const connectToDB = function connectToDB (options) {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.DBHost, options);
  mongoose.connection.on('error', console.error);
  mongoose.connection.on('connected', () => debug(`connected to ${config.DBHost}`));
};

export default () => connectToDB(_options);
