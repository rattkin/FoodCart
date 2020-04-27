import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { MaterialModule } from './material-module';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import * as fromReducers from './state/reducers/mealStore';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { OrderTimeComponent } from './order-time/order-time.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PickSideDishComponent,
    OrderListComponent,
    OrderDialogComponent,
    OrderSuccessfulComponent,
    OrderFailedComponent,
    OrderTimeComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
