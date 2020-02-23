import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  properties = [];
  PropertiesSubscription: Subscription;

  constructor(
    private propertiesServices: PropertiesService
  ) { }

  ngOnInit() {
    this.PropertiesSubscription = this.propertiesServices.propertiesSubject.subscribe(
      (data: any) => {
        this.properties = data;
      }
      // (error) => {
      //   console.error(error);
      // },
      // () => {
      //   console.log('Observable complete');
      // }
    );
    this.propertiesServices.emitProperties();
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnDestroy() {
    this.PropertiesSubscription.unsubscribe();
  }
}
