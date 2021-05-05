import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { SharedService } from "../../services/shared.service";
import fieldsJson from "../../../assets/formly-data/alerts.json";
import fieldOptionsJson from "../../../assets/formly-data/alerts-options.json";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent extends LayoutComponent implements OnInit {
  private IS_ENHANCED_ALERTS: boolean = false;

  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.initializeFormState();
    this.initializeFieldOptions();
    this.initializeFields();
  }

  initializeFormState(): void {
    this.options.formState = {
      enhanced: this.IS_ENHANCED_ALERTS,
      fieldOptions: []
    }
  }

  initializeFieldOptions(): void {
    this.options.formState.fieldOptions = fieldOptionsJson;
  }

  initializeFields(): void {
    this.fields = fieldsJson;
  }
}
