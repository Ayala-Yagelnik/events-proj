import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  EventsapiComponent } from "../components/events/events.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsapiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'events-proj';
}
