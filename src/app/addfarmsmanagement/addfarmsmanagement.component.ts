import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addfarmsmanagement',
  templateUrl: './addfarmsmanagement.component.html',
  styleUrls: ['./addfarmsmanagement.component.css']
})
export class AddfarmsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/farmsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  farmsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
