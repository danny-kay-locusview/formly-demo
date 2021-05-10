import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from "@ngx-formly/material/datepicker";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyFormComponent } from './components/formly-form/formly-form.component';
import { BasicComponent } from './pages/basic/basic.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { PayloadViewerComponent } from './components/payload-viewer/payload-viewer.component';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { NotesComponent } from './components/notes/notes.component';
import { MatNativeDateModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LayoutComponent } from "./components/layout/layout.component";
import { CustomInputWrapperComponent } from "./components/custom-input-wrapper/custom-input-wrapper.component";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AlertsComponent } from './pages/alerts/alerts.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedService } from "./services/shared.service";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { RepeatInputComponent } from './components/repeat-input/repeat-input.component';
import { ClearInputComponent } from './components/clear-input/clear-input.component';
import { CustomComponent } from './pages/custom/custom.component';
import { FormlyMatToggleModule } from "@ngx-formly/material/toggle";
import { MatSelectModule } from "@angular/material/select";

const FORMLY_CONFIG = {
  extras: {
    lazyRender: true
  },
  types: [
    { name: 'custom', component: CustomInputComponent },
    { name: 'repeat', component: RepeatInputComponent },
    { name: 'clear', component: ClearInputComponent },
  ],
  wrappers: [
    { name: 'customWrapper', component: CustomInputWrapperComponent }
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
  ],
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BasicComponent,
    FormlyFormComponent,
    PayloadViewerComponent,
    NotesComponent,
    CustomInputComponent,
    CustomInputWrapperComponent,
    AlertsComponent,
    NavbarComponent,
    ConfigurationComponent,
    RepeatInputComponent,
    ClearInputComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(FORMLY_CONFIG),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
