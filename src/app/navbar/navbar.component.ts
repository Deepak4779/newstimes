import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { routes } from '../app.routes';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   q: string = ""
  language = "hi"
  search=""
  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute, private router:Router) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.q = params.q ? params.q : "All"
      this.language = params.language ? params.language : "hi"    

    })
  }
  getInputData(event:any){
   this.search = event.target.value
  }
  postSearch(event:any){
    event.preventDefault()
    this.router.navigate(['/'], {queryParams: {q:this.search,language:this.language}})

  }
}
