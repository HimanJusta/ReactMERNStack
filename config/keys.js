if (process.env.NODE_ENV === 'production') {
  // In production env
  module.exports = require('./prod');
} else {
  // In dev env
  module.exports = require('./dev');
}
