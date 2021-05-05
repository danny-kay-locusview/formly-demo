import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from "@ngx-formly/core";

@Component({
  selector: 'app-custom-input-wrapper',
  templateUrl: './custom-input-wrapper.component.html',
  styleUrls: ['./custom-input-wrapper.component.scss']
})
export class CustomInputWrapperComponent extends FieldWrapper implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
