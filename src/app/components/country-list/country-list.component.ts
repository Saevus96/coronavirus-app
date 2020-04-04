import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { Country } from 'src/app/model/country';
import { NgForm } from '@angular/forms';
import { tap, map, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;

  @Output() sendCountry = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllCountries();
    this.getUserCountry();

  }

  getUserCountry() {
    this.dataService.getUserIpAddress()
      .pipe(
        concatMap(data => this.dataService.getUserCountry(data.ip)))
      .subscribe(data => {
        let countryIndex = this.countries.findIndex(country => country.name === data.country);
        this.selectedCountry = this.countries[countryIndex];
        this.sendCountry.emit(this.selectedCountry);
      });
  }

  getAllCountries() {
    this.dataService.getAllCountries()
      .subscribe(data => {
        this.countries = data;
        console.log(data);
      });
  }

  onChange() {
    this.sendCountry.emit(this.selectedCountry);
  }
}
