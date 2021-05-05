import { AfterContentInit, Component, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core/lib/components/formly.field.config";
import { FormlyFormComponent } from "../formly-form/formly-form.component";
import { SharedService } from "../../services/shared.service";
import { MatDrawer } from "@angular/material/sidenav";
import notes from "../../../assets/notes.json";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements AfterContentInit {
  @ViewChild(MatDrawer) sidenav: MatDrawer;
  @ContentChildren(FormlyFormComponent, { descendants: true }) formlyForm: QueryList<FormlyFormComponent>;

  public form: FormGroup | FormArray = new FormGroup({});
  public model: any = {};
  public fields: FormlyFieldConfig[] = [];
  public options: FormlyFormOptions = {};
  public actions = [{
    title: "Submit",
    color: "primary",
    action: () => this.submit()
  }, {
    title: "Reset",
    action: () => this.reset()
  }];
  public notes: string[] = [];

  constructor(public sharedService: SharedService) {
    this.notes = notes;
    this.sharedService.toggleSideNav$.subscribe(() => {
      this.sidenav.toggle();
    })
  }

  ngAfterContentInit(): void {
    this.formlyForm.forEach(ff => {
      this.form = ff.form;
      this.model = ff.model;
      this.fields = ff.fields;
      this.options = ff.options;
      this.actions = ff.actions;
      this.notes = ff.notes;
    })
  }

  reset(): void {
    this.options.resetModel();
  }

  submit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
    else {
      alert("Form is invalid");
    }
  }
}
