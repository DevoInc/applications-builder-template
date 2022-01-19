import config from './config';
import App from '@devo/applications-builder/App';
import bootstrap from '@devo/applications-builder/bootstrap';

// Languages
// -----------------------------------------------------------------------------

bootstrap.langs({
  es_ES: require('./i18n/es_ES.json'),
});

// Create App
// -----------------------------------------------------------------------------

let app = new App(config.id);
bootstrap.app(app);

// Create the request for use
// -----------------------------------------------------------------------------

require('./resources/requests');

// Create Tabs
// -----------------------------------------------------------------------------

import createTab1 from './tabs/tab1';
import createTab2 from './tabs/tab2';

app.addTab(createTab1());
app.addTab(createTab2());

// Init application
// -----------------------------------------------------------------------------

app.init();
