import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  drawerState: boolean = false
  searchQuery: string = ""
  constructor(private router : Router, private data : DataService) { }
  
  handleRoutes(route:string){
    this.router.navigate([route]);
  }
  drawertoggle(){
    this.drawerState = !this.drawerState
  }
  handleSearchQuery(){
    this.data.updateSearchQuery(this.searchQuery)
  }
}
