// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { EventType } from '../models/EventType.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventsService {
//   private apiUrl = 'https://eventsapi.onrender.com/api/Events';
//   events$: Observable<EventType[]>;
//   constructor(private http: HttpClient) { }

//   // פונקציה לקבלת אירועים
//   getEvents()//: Observable<EventType[]> 
//   {
//     this.events$=this.http.get<EventType[]>(this.apiUrl).pipe(d=>d);
//   }

//   // פונקציה להוספת אירוע
//   addEvent(item: EventType)//: Observable<EventType> 
//   {
//      this.http.post(this.apiUrl, item).subscribe(()=>{
//       this.getEvents()
//      })
//   }
// }



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventType } from '../models/EventType.model';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private baseUrl = 'https://eventsapi.onrender.com/api/Events';

  constructor(private http: HttpClient) { }
  getEvents() : Observable<EventType[]> {
    return this.http.get<EventType[]>(this.baseUrl);
  }

}