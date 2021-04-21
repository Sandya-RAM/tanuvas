import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'edit-addvaccinemanagement',
  templateUrl: './editvaccinemanagement.component.html',
  styleUrls: ['./editvaccinemanagement.component.css']
})
export class EditvaccinemanagementComponent implements OnInit {
  returnUrl= "/dashboard/vaccinemanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  vaccinemanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
