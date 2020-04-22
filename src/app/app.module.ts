import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { MenuComponent } from './menu/menu.component';
import * as fromReducers from './state/reducers/mealStore';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromReducers.reducer,
      //  {      metaReducers    }
    ),
    StoreModule.forFeature(fromReducers.mealFeatureKey, fromReducers.reducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
