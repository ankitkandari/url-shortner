import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { UrlService } from '../services/url.service';
import { Url } from '../url';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-urleditor',
  templateUrl: './urleditor.component.html',
  styleUrls: ['./urleditor.component.scss']
})
export class URLEditorComponent {

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  urlService: UrlService = inject(UrlService);
  short_url: string | null | undefined = '';

  urlForm = new FormGroup({
    url: new FormControl(''),
  });

  async onSubmit() {
    const url_id = this.urlService.getRandomString();
    const data: Url = {
      url: this.urlForm.value.url,
      count: 0,
      short_url: `${environment.base}/${url_id}`,
      url_id
    }

    let isSaved = await this.urlService.addUrl(data);

    if (isSaved) {
      this.short_url = data?.short_url;
      this.urlForm.reset();
    }


    return false;
  }

  getCopy(value: string) {
    this.clipboard.copy(value ?? 'gg');
    this._snackBar.open('Copied to clipboard', 'OK');
  }

}
