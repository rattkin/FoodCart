import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemListComponent } from './item-list/item-list.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'meal/:MealClass', component: ItemListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
