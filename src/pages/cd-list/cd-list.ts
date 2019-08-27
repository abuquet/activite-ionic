import { LendCdPage } from './lend-cd/lend-cd';
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { CdsServices } from '../../services/cds.services';
import { Cd } from '../../models/Cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html'
})
export class CdListPage {

    cdList: Cd[];

    constructor(private modalCtrl: ModalController, private cdsServices: CdsServices, private menuCtrl: MenuController) {}

    ionViewWillEnter() {
      this.cdList = this.cdsServices.cdList.slice();
    }

    onLoadCd(index: number) {
      let modal = this.modalCtrl.create(LendCdPage, {index: index});
      modal.present();
    }

    onToggleMenu() {
      this.menuCtrl.open();
    }
}