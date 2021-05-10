import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../../components/layout/layout.component";
import { SharedService } from "../../services/shared.service";
import fieldsJson from "../../../assets/formly-data/alerts.json";
import fieldOptionsJson from "../../../assets/formly-data/alerts-options.json";
import responseJson from "../../../assets/formly-data/alerts-response.json";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent extends LayoutComponent implements OnInit {
  private _enhanced: boolean = false;
  private _responseIndex: number = null;

  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    super(sharedService);
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id");
    this._responseIndex = id ? parseInt(id) : null;

    this.initializeFormState();
    this.initializeFieldOptions();
    this.initializeModel(this._responseIndex);
    this.initializeFields();
  }

  initializeFormState(): void {
    this.options.formState = {
      enhanced: this._enhanced,
      fieldOptions: []
    }
  }

  initializeModel(index = null): void {
    if (index === null || index === undefined) {
      this.model = {};
      return;
    }

    const { alertLevel, projectTypeIds, alertDefinition, alertTrigger, alertSummary, title } = responseJson[index];
    const model: any = {
      // Prompt Alert Card
      alertLevel,
      projectTypeIds,

      // When Entity Card
      entityType: alertDefinition.entityType,
      entityTypeIds: alertDefinition.entityTypeIds,
      definition: alertDefinition.criterion,

      // Satisfies Card
      evaluationType: alertTrigger.evaluationType,
      entityType2: alertTrigger.alertDefinitions[0]?.entityType,
      entityTypeIds2: alertTrigger.alertDefinitions[0]?.entityTypeIds,

      // Long Story Short card
      alertSummary,
      title
    };

    this.model = model;
  }

  initializeFieldOptions(): void {
    this.options.formState.fieldOptions = fieldOptionsJson;
  }

  initializeFields(): void {
    this.fields = fieldsJson.map((formCard) => {
      return formCard;
    });
  }
}
