import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addfarmsmanagement',
  templateUrl: './addfarmsmanagement.component.html',
  styleUrls: ['./addfarmsmanagement.component.css']
})
export class AddfarmsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/farmsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  farmsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
