import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addspeciesmanagement',
  templateUrl: './addspeciesmanagement.component.html',
  styleUrls: ['./addspeciesmanagement.component.css']
})
export class AddspeciesmanagementComponent implements OnInit {
  returnUrl= "/dashboard/speciesmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');
  }
  speciesmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
