import { Component } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-end';
  todayInfo: any;
  constructor(private calendarService: CalendarService){
    this.calendarService.getTodayDate().subscribe(res =>{
      this.todayInfo = res.data
    })
  }
}
