import { Component, OnInit } from '@angular/core';
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: 'app-clear-input',
  templateUrl: './clear-input.component.html',
  styleUrls: ['./clear-input.component.scss']
})
export class ClearInputComponent extends FieldType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
