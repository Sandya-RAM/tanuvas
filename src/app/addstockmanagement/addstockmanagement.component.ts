import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addstockmanagement',
  templateUrl: './addstockmanagement.component.html',
  styleUrls: ['./addstockmanagement.component.css']
})
export class AddstockmanagementComponent implements OnInit {
  returnUrl= "/dashboard/stockmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  stockmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
