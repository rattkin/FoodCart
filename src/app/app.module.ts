import { NgModule } from '@angular/core';
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
import { MaterialModule } from './material-module';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PickSideDishComponent,
    OrderListComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
  entryComponents: [
    PickSideDishComponent,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
