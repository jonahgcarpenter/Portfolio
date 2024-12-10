import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HAMMER_GESTURE_CONFIG, provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

class HammerConfig {
  options = {
    touchAction: 'pan-y'
  };
  overrides = {
    swipe: { direction: 6 } // Enables horizontal swipe
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ]
};
