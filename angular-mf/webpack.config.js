const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angular-mf',
  exposes: {
    './AngularComponent': './src/app/angular-component.ts',
    './SimpleComponent': './src/app/components/simple-component/simple-component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
