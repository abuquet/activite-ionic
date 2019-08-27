import { Book } from './../../models/Book';
import { BooksService } from './../../services/books.service';
import { LendBookPage } from './lend-book/lend-book';
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
    private booksService: BooksService, private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.booksList = this.booksService.booksList.slice();
  }


  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}