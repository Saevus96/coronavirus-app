import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Country } from '../../model/country';
import { Case } from '../../model/case';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() country: Country;
  @Output() sendCase = new EventEmitter<Case>();


  chosenCountry = new Country();
  coronavirusCases = new Array<Case>();
  selectedCase: Case;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.chosenCountry = changes.country.currentValue; 
    this.getCoronavirusStats();
  }

  getCoronavirusStats() {
    this.coronavirusCases = [];
    if (this.chosenCountry.alpha2Code) {
      this.dataService.getCoronavirusCases(this.chosenCountry.alpha2Code)
        .subscribe(data => {
          if (data.timelineitems) {
            data.timelineitems.forEach(element => {
              Object.keys(element).forEach((reportDate) => {
                this.coronavirusCases.push(new Case(
                  new Date(reportDate),
                  element[reportDate].new_daily_cases,
                  element[reportDate].new_daily_deaths,
                  element[reportDate].total_cases,
                  element[reportDate].total_recoveries,
                  element[reportDate].total_deaths
                ))
              });
              this.coronavirusCases.pop();
              this.selectedCase = this.coronavirusCases[this.coronavirusCases.length - 1];
              this.sendCase.emit(this.selectedCase);
            });
          } else {
            this.coronavirusCases = [];
            this.selectedCase = null;
            this.sendCase.emit(this.selectedCase);
          }
        });
    }
  }

  onChange() {
    this.sendCase.emit(this.selectedCase);
  }

}
