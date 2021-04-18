import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addbreedsmanagement',
  templateUrl: './addbreedsmanagement.component.html',
  styleUrls: ['./addbreedsmanagement.component.css']
})
export class AddbreedsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/breedsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');

  }
  breedsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
