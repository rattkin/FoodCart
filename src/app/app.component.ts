import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'indicka';

  ngOnInit(): void {
  }
}
