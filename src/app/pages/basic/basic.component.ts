import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { SharedService } from "../../services/shared.service";
import { FormlyFieldConfig } from "@ngx-formly/core/lib/components/formly.field.config";
import fieldsJson from "../../../assets/formly-data/basic.json";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent extends LayoutComponent implements OnInit {
  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.initializeFields(fieldsJson);
  }

  initializeFields(json: FormlyFieldConfig[]): void {
    this.fields = json;
  }
}
