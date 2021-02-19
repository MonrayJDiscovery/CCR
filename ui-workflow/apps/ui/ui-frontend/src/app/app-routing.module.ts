import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {PoolsMaintainComponent} from "./pages/pools-maintain/pools-maintain.component";
import {RulesMaintainComponent} from "./pages/rules-maintain/rules-maintain.component";
import {RoutesMaintainComponent} from "./pages/routes-maintain/routes-maintain.component";
import {PoolsQueryComponent} from "./pages/pools-query/pools-query.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'pools-maintain',
    component: PoolsMaintainComponent,
    pathMatch: 'full'
  },
  {
    path: 'rules-maintain',
    component: RulesMaintainComponent,
    pathMatch: 'full'
  },
  {
    path: 'routes-maintain',
    component: RoutesMaintainComponent,
    pathMatch: 'full'
  },
  {
    path: 'pools-query',
    component: PoolsQueryComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
