import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent{
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '5/6/2022',
    time: '10:00 AM',
    price: 59.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      countary: 'England'
    }
  }

}
