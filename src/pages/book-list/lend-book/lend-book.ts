import { BooksService } from './../../../services/books.service';
import { Book } from './../../../models/Book';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    public booksService: BooksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.booksService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
  }

}
