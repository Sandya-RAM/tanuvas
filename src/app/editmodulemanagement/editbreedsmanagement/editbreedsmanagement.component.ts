import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-editbreedsmanagement',
  templateUrl: './editbreedsmanagement.component.html',
  styleUrls: ['./editbreedsmanagement.component.css']
})
export class EditbreedsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/breedsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    $('.selectpicker').selectpicker('refresh');

  }
  breedsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
