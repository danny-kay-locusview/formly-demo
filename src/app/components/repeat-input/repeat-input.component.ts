import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from "@ngx-formly/core";

@Component({
  selector: 'formly-repeat-section',
  templateUrl: './repeat-input.component.html',
  styleUrls: ['./repeat-input.component.scss']
})
export class RepeatInputComponent extends FieldArrayType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
