import { Component, Input, OnInit } from '@angular/core';
import { Seminar } from 'src/app/models/seminar';

@Component({
  selector: 'app-seminar-items',
  templateUrl: './seminar-items.component.html',
  styleUrls: ['./seminar-items.component.scss']
})
export class SeminarItemsComponent implements OnInit {
  @Input() seminar: any;
  constructor() { }

  ngOnInit(): void {
  }

}
