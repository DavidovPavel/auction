import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { AclDirective } from './components/header/acl.directive';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetComponent } from './components/widget/widget.component';

import { ImageComponent } from './components/widget/proto/image.component';
import { FormComponent } from './components/widget/proto/form.component';
import { TextComponent } from './components/widget/proto/text.component';
import { GraphComponent } from './components/widget/proto/graph.component';
import { StatisticComponent } from './components/widget/proto/statistic.component';
import { ChartComponent } from './components/widget/proto/chart.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaruselComponent,
    AclDirective,
    SearchComponent,
    DashboardComponent,
    WidgetComponent,
    ImageComponent,
    FormComponent,
    TextComponent,
    GraphComponent,
    StatisticComponent,
    ChartComponent,
    DetailProductComponent,
    HomeComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ImageComponent,
    FormComponent,
    TextComponent,
    GraphComponent,
    StatisticComponent,
    ChartComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
