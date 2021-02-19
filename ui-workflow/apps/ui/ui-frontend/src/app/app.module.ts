import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {SharedThemeModule} from "@workflow-front-end/shared/theme";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PoolsQueryComponent } from './pages/pools-query/pools-query.component';
import { PoolsMaintainComponent } from './pages/pools-maintain/pools-maintain.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutesMaintainComponent } from './pages/routes-maintain/routes-maintain.component';
import { RulesMaintainComponent } from './pages/rules-maintain/rules-maintain.component';

@NgModule({
  declarations: [AppComponent, PoolsQueryComponent, PoolsMaintainComponent, HomeComponent, RoutesMaintainComponent, RulesMaintainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    SharedThemeModule.forRoot('default'),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbActionsModule,
    AppRoutingModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
