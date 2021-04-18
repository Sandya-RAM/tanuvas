import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addvaccinemanagement',
  templateUrl: './addvaccinemanagement.component.html',
  styleUrls: ['./addvaccinemanagement.component.css']
})
export class AddvaccinemanagementComponent implements OnInit {
  returnUrl= "/dashboard/vaccinemanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  vaccinemanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
