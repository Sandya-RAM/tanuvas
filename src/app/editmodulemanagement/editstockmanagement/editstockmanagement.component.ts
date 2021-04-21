import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-editstockmanagement',
  templateUrl: './editstockmanagement.component.html',
  styleUrls: ['./editstockmanagement.component.css']
})
export class EditstockmanagementComponent implements OnInit {
  returnUrl= "/dashboard/stockmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  stockmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
