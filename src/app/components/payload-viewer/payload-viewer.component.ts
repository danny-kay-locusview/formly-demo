import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payload-viewer',
  templateUrl: './payload-viewer.component.html',
  styleUrls: ['./payload-viewer.component.scss']
})
export class PayloadViewerComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }
}
