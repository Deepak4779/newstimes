import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  totalResults = 0
  articles: any = []
  q: string = ""
  language = ""
  page=1
  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.q = params.q ? params.q : "All"
      this.language = params.language ? params.language : "hi"
      this.dataService.getNewsArticles({ q: this.q, language: this.language,page:1 }).subscribe((response: any) => {
        this.articles = response.articles.filter((items:any)=>items.title!=="[Removed]")
        this.totalResults = response.totalResults

      })
    })
  }

  fetchMoreData(){    
    this.page=this.page+1
    this.dataService.getNewsArticles({ q: this.q, language: this.language,page:this.page }).subscribe((response: any) => {
      this.articles = this.articles.concat(response.articles.filter((items:any)=>items.title!=="[Removed]"))
    })
  }
}
