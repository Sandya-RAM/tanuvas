import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addstockmanagement',
  templateUrl: './addstockmanagement.component.html',
  styleUrls: ['./addstockmanagement.component.css']
})
export class AddstockmanagementComponent implements OnInit {
  returnUrl= "/dashboard/stockmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  stockmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
