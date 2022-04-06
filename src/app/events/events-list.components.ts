import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>
      Angular Upcoming Events!
    </h1>
    <hr/>
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.countary}}</span>
      </div>
    </div>
  </div>
  `
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