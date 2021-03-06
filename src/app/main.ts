import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from "@angular/core";

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { TransitionService } from './shared/transition.service';

// enableProdMode();

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(error => console.log(error));