import { Place } from './../../place.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() offer: Place;

  constructor() { }

  getDummyDate() {
    return new Date();
  }
  
  ngOnInit() {}

}
