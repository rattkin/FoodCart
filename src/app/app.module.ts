import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
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
import { ItemListComponent } from './item-list/item-list.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { OrderListComponent } from './order-button/order-button.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { PickSideDishComponent } from './pick-side-dish/pick-side-dish.component';
import * as fromReducers from './state/reducers/mealStore';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PickHeatComponent } from './pick-heat/pick-heat.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    PickSideDishComponent,
    OrderListComponent,
    OrderDialogComponent,
    OrderSuccessfulComponent,
    OrderFailedComponent,
    TopMenuComponent,
    SideMenuComponent,
    PickHeatComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatMomentDateModule,
    StoreModule.forRoot(fromReducers.reducer,
      //  {      metaReducers    }
    ),
    NgxMaterialTimepickerModule.setLocale('cs-CZ'),
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
