/**
 * Created by yabing on 16/9/13.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './ts/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
