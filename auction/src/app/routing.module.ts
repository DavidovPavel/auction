import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';

const routing = [
  { path: '', component: HomeComponent},
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routing)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
