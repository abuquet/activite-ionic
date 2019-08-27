import { CdListPage } from './../cd-list/cd-list';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cdsPage = CdListPage;

}
