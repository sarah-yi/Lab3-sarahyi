import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey: string = "f8770df6cb9b934e5ac6b7d2dcafee9e";
  appid: string = "90e661c1";
  apiUrl= "https://api.data.charitynavigator.org/v2";

  constructor(private http: HttpClient) { }

  getData(options: SearchInterface) {
    let searchUrl = this.apiUrl + `?q=${options.searchWord}&app_id=${this.appid}&app_key=${this.apikey}&to=24`;
  

  if (options.charityName) {
    searchUrl += `&charity=${options.charityName}`;
  }

 
  if (options.categoryName) {
    searchUrl += `&charity=${options.categoryName}`;
  }

  return this.http.get(searchUrl);
  }
}
