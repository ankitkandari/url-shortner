import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../services/url.service';
import { Url } from '../url';

@Component({
  selector: 'app-urlreader',
  templateUrl: './urlreader.component.html',
  styleUrls: ['./urlreader.component.scss']
})



export class URLReaderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  urlService: UrlService = inject(UrlService);

  url_id: string = this.route.snapshot.params['id'];
  url_data: Url | any = {};

  constructor() {
    this.loadData();
  }

  async loadData() {

    try {
      this.url_data = await this.urlService.getUrlByURLId(this.url_id)
      if (this.url_data) {
        window.location.href = this.url_data?.url;
      } else {
        console.log("Data not found or empty.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


}