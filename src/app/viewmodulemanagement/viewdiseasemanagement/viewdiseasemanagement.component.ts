import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewdiseasemanagement',
  templateUrl: './viewdiseasemanagement.component.html',
  styleUrls: ['./viewdiseasemanagement.component.css']
})
export class ViewdiseasemanagementComponent implements OnInit {
  returnUrl= "/dashboard/diseasemanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  diseasemanagement(){
    this.router.navigate([this.returnUrl]);
  }

}
