import { Component, OnInit } from '@angular/core';
import { Seminar } from './models/seminar';
import { SeminarService } from './services/seminar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularph-stackleague';
  seminars: Seminar[] = [];
  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    this.seminarService.getSeminars().subscribe((data: Seminar[]) => {
      console.log(data);
      this.seminars = data;
    });
  }
}
