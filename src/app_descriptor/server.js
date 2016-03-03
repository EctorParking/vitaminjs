/* eslint no-console: 0 */

const defaults = {
    middlewares: [],
    renderFullPage: true,
    host: 'http://localhost',
    port: '8080',
};

let config = {};
try {
    config = require('__app__/app_descriptor/server.js').default;
} catch (e) {
    console.warn(`Cannot load server.js, resolve to default server config (${e.message})`);
}

export default { ...defaults, ...config };
