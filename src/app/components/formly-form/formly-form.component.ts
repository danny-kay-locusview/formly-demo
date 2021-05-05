import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core/lib/components/formly.field.config";

@Component({
  selector: 'app-formly-form',
  templateUrl: './formly-form.component.html',
  styleUrls: ['./formly-form.component.scss']
})
export class FormlyFormComponent implements OnInit {

  @Input() form: FormGroup | FormArray;
  @Input() model: any = {};
  @Input() fields: FormlyFieldConfig[];
  @Input() options: FormlyFormOptions;
  @Input() actions: {
    title: string;
    color: "basic" | "primary" | "accent" | "warn" | "disabled" | "link";
    action: () => any
  }[];
  @Input() notes: string[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(model: any): void {
    console.log(model);
  }
}
