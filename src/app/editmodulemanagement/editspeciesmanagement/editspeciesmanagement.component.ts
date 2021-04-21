import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-editspeciesmanagement',
  templateUrl: './editspeciesmanagement.component.html',
  styleUrls: ['./editspeciesmanagement.component.css']
})
export class EditspeciesmanagementComponent implements OnInit {
  returnUrl= "/dashboard/speciesmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  speciesmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
