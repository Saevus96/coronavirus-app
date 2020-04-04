import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Case } from 'src/app/model/case';
import { Country } from 'src/app/model/country';
import { ThrowStmt } from '@angular/compiler';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations: [
    trigger('expand', [
      state('expanded', style({
        'max-height': '300px',
        opacity: '1'       
      })),
      state('rolled', style({
        height: '0',
        opacity: '0'
      })),
      transition('expanded => rolled', [
        animate('0.5s')        
      ]),
      transition('rolled => expanded', [
        animate('2s')
      ]),
    ])
  ]
})
export class StatisticsComponent implements OnInit, OnChanges {


  @Input('case') case: Case;
  @Input('country') country: Country;


  constructor() { }


  chosenCase: Case;
  chosenCountry: Country;


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.country && this.country) {
      this.chosenCountry = changes.country.currentValue;
    }

    if (changes.case && this.case) {
      this.chosenCase = changes.case.currentValue;
    } else {
      this.chosenCase = null;
    }
  }

}
