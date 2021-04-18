import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addspeciesmanagement',
  templateUrl: './addspeciesmanagement.component.html',
  styleUrls: ['./addspeciesmanagement.component.css']
})
export class AddspeciesmanagementComponent implements OnInit {
  returnUrl= "/dashboard/speciesmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  speciesmanagement(){
    this.router.navigate([this.returnUrl]);
  }
}
