import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../services/shared.service";
import { LayoutComponent } from "../../components/layout/layout.component";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent extends LayoutComponent implements OnInit {

  constructor(public sharedService: SharedService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.initializeFields();
  }

  initializeFields(): void {
    this.fields = [];
  }
}
