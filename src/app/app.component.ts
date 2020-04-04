import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { Country } from './model/country';
import { concatMap, tap, count } from 'rxjs/operators';
import { Case } from './model/case';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private dataService: DataService) { }

  country: Country = new Country();
  case: Case;

  ngOnInit(): void {

  }

  receiveCountry(event) {
    this.country = event; 
  }

  receiveCase(event) {
    this.case = event;
  }
}
