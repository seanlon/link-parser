import { Component } from '@angular/core';
import { ApiService } from './service/api.service';


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
  linksFromService;
  serviceLinks: ServiceLink[] = [];
  serviceLinksValidated: ServiceLink[] = [];

  brokenLinkChecker: any;
  blc: any

  constructor(
    private apiService: ApiService
  ) {
  }


  public ngOnInit() {
    this.getLinkFromService();
  }


  public getLinkFromService() {
    this.apiService.setPath('http://localhost:4200/assets/mock-data.json');
    this.apiService.getAll()
      .subscribe(
      (response) => {

        this.serviceLinks = response;
        this.serviceLinksValidated = response;
        this.checkIfLinksBroken();
      }
      );
  }
  public checkIfLinksBroken() {

    this.serviceLinksValidated.map((link, index) => {

      const path = `http://localhost:3000/?url=${link.linkUrl}`

      this.apiService.setPath('http://localhost:4200/assets/mock-data.json');
      this.apiService.getAll()
        .subscribe(
        (response) => {
          this.serviceLinksValidated[index].isBroken = response['isBroken']
        }
        )
    })
  }



}