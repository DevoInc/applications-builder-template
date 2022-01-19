module.exports = {

  // The ID of the applications, must be unique
  id: 'vappTemplate',
  version: '0.1.0', // Version, should be update whenever the package.json version is changed
  author: {
      name: 'DEVO', // Author
      email: 'desa@devo.com', // Contact email
  },
  title: { // Translations of the menú entry for this vapp.
      'en': 'My Vertical App',
      'es': 'Mi aplicación vertical'
  },
  scope: {
      url: 'https://us.devo.com', // URL of the devo platform where the app will be deployed
      type: 'domain', // Either 'domain' or 'reseller'
      name: 'mydomain' // A specific domain or reseller name
  },

  // Add here any custom configuration

};
