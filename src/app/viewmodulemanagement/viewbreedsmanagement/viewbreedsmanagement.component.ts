import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewbreedsmanagement',
  templateUrl: './viewbreedsmanagement.component.html',
  styleUrls: ['./viewbreedsmanagement.component.css']
})
export class ViewbreedsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/breedsmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  breedsmanagement(){
    this.router.navigate([this.returnUrl]);
  }

}
