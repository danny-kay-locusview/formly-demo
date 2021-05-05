import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from "./pages/basic/basic.component";
import { AlertsComponent } from "./pages/alerts/alerts.component";
import { ConfigurationComponent } from "./pages/configuration/configuration.component";
import { CustomComponent } from "./pages/custom/custom.component";

const routes: Routes = [
  {path: '', component: BasicComponent, data: {title: 'Simple style'}},
  {path: 'alerts', component: AlertsComponent, data: {title: 'Warnings & Violations style'}},
  {path: 'configuration', component: ConfigurationComponent, data: {title: 'Configuration style'}},
  {path: 'custom', component: CustomComponent, data: {title: 'Custom Playground'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
