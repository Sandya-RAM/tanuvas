import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewfarmsmanagement',
  templateUrl: './viewfarmsmanagement.component.html',
  styleUrls: ['./viewfarmsmanagement.component.css']
})
export class ViewfarmsmanagementComponent implements OnInit {

  returnUrl= "/dashboard/farmsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  farmsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
