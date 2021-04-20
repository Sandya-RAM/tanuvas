import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewspeciesmanagement',
  templateUrl: './viewspeciesmanagement.component.html',
  styleUrls: ['./viewspeciesmanagement.component.css']
})
export class ViewspeciesmanagementComponent implements OnInit {

  returnUrl= "/dashboard/speciesmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  speciesmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
