import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  constructor(private theService: FirstServiceService) { }

  ngOnInit() {
  }

}
