import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties = [
    {
      title : 'Ma super maison',
      category : 'Maison',
      sold : true
    },
    {
      title : 'Petit appartement',
      category : 'Appartement',
      sold : false
    },
    {
      title : 'Belle villa',
      category : 'Maison',
      sold : true
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
