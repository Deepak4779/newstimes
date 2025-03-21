import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) {  }
  getNewsArticles(options:any){
    return this.http.get(`https://newsapi.org/v2/everything?q=${options.q}&language=${options.language}&page=${options.page}&pageSize=24&sortBy=publishedAt&apiKey=1140cc6ae6d84c15ac77251a11e3d4b5`)

  }
}
