// import { Component, OnInit } from '@angular/core';
// import { EventsService } from '../../services/events.service';
// import { EventType } from '../../models/EventType.model';
// import { AsyncPipe } from '@angular/common';
// import { Observable } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-events',
//   standalone: true,
//   imports: [AsyncPipe, HttpClientModule],
//   templateUrl: './events.component.html',
//   styleUrl: './events.component.css'
// })
// export class EventsComponent implements OnInit{

//   events$: Observable<EventType[]>;
//   constructor(private eventService: EventsService) {}

  

//   ngOnInit() {
//     this.events$ = this.eventService.events$; 
//     this.loadEvents();
//   }

//   loadEvents() {
//     this.eventService.getEvents();
//   }

//   addEvent(newEvent: EventType) {
//     this.eventService.addEvent(newEvent)
    
//   }
// }





import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';

import { AsyncPipe } from '@angular/common';
import { EventType } from '../../models/EventType.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsapiComponent {

  constructor(private eventService: EventsService) { }

  events: EventType[] = [];

  ngOnInit() {
   
    this.eventService.getEvents().subscribe(data =>{
     this.events = data
    });

  }
}