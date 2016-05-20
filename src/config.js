require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Robert Sahm',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Robert Sahm: %s',
      meta: [
        {name: 'description', content: 'The portfolio of web developer Robert Sahm'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Robert Sahm'},
        {property: 'og:description', content: 'The portfolio of web developer Robert Sahm.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@robertsahm'},
        {property: 'og:creator', content: '@robertsahm'},
        {property: 'og:image:width', content: '0'},
        {property: 'og:image:height', content: '0'}
      ]
    }
  },

}, environment);
