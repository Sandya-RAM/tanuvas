import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewstockmanagement',
  templateUrl: './viewstockmanagement.component.html',
  styleUrls: ['./viewstockmanagement.component.css']
})
export class ViewstockmanagementComponent implements OnInit {


  returnUrl= "/dashboard/stockmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  stockmanagement(){
    this.router.navigate([this.returnUrl]);
  }

}
