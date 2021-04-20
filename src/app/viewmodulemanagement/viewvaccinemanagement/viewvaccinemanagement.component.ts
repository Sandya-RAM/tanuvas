import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewvaccinemanagement',
  templateUrl: './viewvaccinemanagement.component.html',
  styleUrls: ['./viewvaccinemanagement.component.css']
})
export class ViewvaccinemanagementComponent implements OnInit {

  returnUrl= "/dashboard/vaccinemanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  vaccinemanagement(){
    this.router.navigate([this.returnUrl]);
  }
  

}
