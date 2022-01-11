import { Component, OnInit } from '@angular/core';
import { MainService } from 'projects/main-shared/services/main.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private MainService:MainService) {}

  toToList:any;

  ngOnInit(): void {
    console.log(this.MainService.projectName);
    this.MainService.getTodos().subscribe(data => {
      this.toToList = data;
    })
  }

}
