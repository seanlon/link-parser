import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { PlatformLocation } from '@angular/common'
import { Router } from '@angular/router';

export class ServiceLink {
  linkTitle: string;
  linkUrl: string;
  isBroken: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** General Title */
  title: string = 'App Link Checker';

  /** Raw Service links fetch from MicroServiceAbc */
  serviceLinks: ServiceLink[] = [];

  /** Validated Service links fetch from MicroServiceAbc */
  serviceLinksValidated: ServiceLink[] = [];

  /** Identify if user has select a broken link routes */
  isFoundRoute: boolean = true;

  constructor(location: PlatformLocation,
    private router: Router,
    private apiService: ApiService
  ) {

    location.onPopState(() => {
      this.resetState();
      console.log('user pressed back!');
    });

  }

  public resetState() {
    this.isFoundRoute = true;
  }

  public ngOnInit() {

    this.fetchLinksFromMicroServiceAbc();
  }
  redirect(isBroken, url) {
    if (isBroken) {
      this.isFoundRoute = false;
      this.router.navigateByUrl('/NotFound');
      return;
    }

    this.isFoundRoute = true;
    location.href = url;
  }

  public fetchLinksFromMicroServiceAbc() {
    this.apiService.setPath('./assets/mock-data.json');
    this.apiService.getAll()
      .subscribe(
      (response) => {

        this.serviceLinks = response;
        this.serviceLinksValidated = response;
        this.parseBrokenLinks();
      }
      );
  }
  public parseBrokenLinks() {

    this.serviceLinksValidated.map((linkItem, index) => {
      const path = `http://localhost:3000/?url=${linkItem.linkUrl}`
      this.apiService.setPath(path);
      this.apiService.getAll()
        .subscribe(
        (response) => {
          this.serviceLinksValidated[index].isBroken = response['isBroken']
        }
        )
    })
  }



}