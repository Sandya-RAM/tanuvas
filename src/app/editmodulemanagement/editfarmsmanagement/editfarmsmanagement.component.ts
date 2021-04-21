import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-editfarmsmanagement',
  templateUrl: './editfarmsmanagement.component.html',
  styleUrls: ['./editfarmsmanagement.component.css']
})
export class EditfarmsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/farmsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  farmsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
