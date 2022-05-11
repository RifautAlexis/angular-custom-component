import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dataSource: Product[];

  constructor() { }

  ngOnInit(): void {
    this.initDataSource();
  }

  private initDataSource() {
    this.dataSource = [
      {
        id: 1,
        name: "Book",
        price: 10.00,
        description: "A common book without a charm",
      },
      {
        id: 1,
        name: "Computer",
        price: 2567.99,
        description: "A Computer",
      },
      {
        id: 1,
        name: "livre",
        price: 10.00,
        description: "A common book without a charm",
      },
      {
        id: 1,
        name: "livre",
        price: 10.00,
        description: "A common book without a charm",
      },
      {
        id: 1,
        name: "livre",
        price: 10.00,
        description: "A common book without a charm",
      },
    ]
  }

}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
