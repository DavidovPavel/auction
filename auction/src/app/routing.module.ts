import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routing = [{ path: 'dashboard', component: DashboardComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routing)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
