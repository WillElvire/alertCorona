import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  country:any;

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/';

  apiUrl2=``;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.apiUrl}all`, );
  }

  getCountries() {

    return this.http.get(`${this.apiUrl}countries`);

  }


  getTheCountry(country){


     return this.http.get(`${this.apiUrl}countries/${country}`);

  }

  getCountryData(country){


   

    return this.http.get(`https://api.covid19api.com/dayone/country/${country}/status/confirmed`);



  }
}
