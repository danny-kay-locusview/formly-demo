import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, startWith, tap } from 'rxjs/operators';
import { promptSection, whenSection, satisfiesSection, storySection, fieldOptions, responseBody } from '../../../assets/formly-data/alerts';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent extends LayoutComponent implements OnInit {
  private _enhanced = false;
  private _responseIndex: number = null;

  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute
  ) {
    super(sharedService);
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
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
    };
  }

  initializeModel(index = null): void {
    if (index === null || index === undefined) {
      this.model = {};
      return;
    }

    const { alertLevel, projectTypeIds, alertDefinition, alertTrigger, alertSummary, title } = responseBody[index];
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
    this.options.formState.fieldOptions = fieldOptions;
  }

  initializeFields(): void {
    this.fields = [
      promptSection,
      whenSection,
      satisfiesSection,
      storySection
    ].map((formCard: FormlyFieldConfig) => {
      const field = formCard.fieldGroup?.find(f => f.key === 'alertLevel');
      if (field) {
        this.setFieldOptionsAsync(field);
      }
      return formCard;
    });
  }

  setFieldOptionsAsync(field: FormlyFieldConfig): void {
    Object.defineProperty(field, 'hooks', {
      get: () => ({
        onInit: () => {
          const fieldKey = field.key as string;
          const options = this.options.formState.fieldOptions[fieldKey];
          const control = this.form.get(fieldKey);
          field.templateOptions.options = control.valueChanges.pipe(
            startWith(control.value),
            map(value => options.filter(o => !!o.matchValue === this.options.formState.enhanced))
          );
        }
      })
    });
  }
}
