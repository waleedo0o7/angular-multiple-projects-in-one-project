import { Component, OnInit } from '@angular/core';
import { MainService } from 'projects/main-shared/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private MainService:MainService) {}

  toToList:any;

  ngOnInit(): void {
    console.log(this.MainService.projectName);
    this.MainService.getTodos().subscribe(data => {
      this.toToList = data;
    })
  }

}
