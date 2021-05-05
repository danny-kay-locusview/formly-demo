import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from "@ngx-formly/core";
import { SharedService } from "../../services/shared.service";
import { LayoutComponent } from "../../components/layout/layout.component";
import fieldsJson from "../../../assets/formly-data/configuration.json";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent extends LayoutComponent implements OnInit {

  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.initializeFields();
  }

  initializeFields(): void {
    this.fields = (fieldsJson as any).map((fieldConfig: FormlyFieldConfig) => {
      return fieldConfig;
    });
  }
}
