import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from "@angular/router";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title: string = 'Formly Demo';
  demoTypes: Routes;
  currentDemo: Route;

  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.demoTypes = this.router.config.filter(route => !!route.data?.title);
    this.currentDemo = this.demoTypes.find((demoType) => demoType.path === window.location.pathname.split("/")[1]);
  }

  onDemoTypeClick(event: Route): void {
    this.currentDemo = event;
    this.router.navigate([event.path]);
  }

  toggleSideNav(): void {
    this.sharedService.toggleSideNav();
  }
}
