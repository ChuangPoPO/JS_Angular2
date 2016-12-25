import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule)
        .then(msg => console.log(`Bootstrap success: ` + msg))
        .catch(error => console.log(error));