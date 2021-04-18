import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addvaccinemanagement',
  templateUrl: './addvaccinemanagement.component.html',
  styleUrls: ['./addvaccinemanagement.component.css']
})
export class AddvaccinemanagementComponent implements OnInit {
  returnUrl= "/dashboard/vaccinemanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  vaccinemanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
