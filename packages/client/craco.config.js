const aliasPlugin = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: aliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  babel: {
    plugins: [['relay', { artifactDirectory: './src/__generated__' }]],
  },
}
