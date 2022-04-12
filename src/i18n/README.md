Create here every locale for use in your application.

The format of the file must be:

```
import { i18n } from '@devoinc/applications-builder/i18n';
i18n.addLocale('en_US', {
  ...
	'Text': 'Translation',
	...
});
```

And don't forget to import the files to the app.js file:

```
...
import './i18n/en_US.js';
...
```
