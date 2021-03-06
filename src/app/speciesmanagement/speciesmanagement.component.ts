import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-speciesmanagement',
  templateUrl: './speciesmanagement.component.html',
  styleUrls: ['./speciesmanagement.component.css']
})
export class SpeciesmanagementComponent implements OnInit {
  returnUrl= "/dashboard/addspeciesmanagement";
  viewurl="/dashboard/viewspeciesmanagement";
  editUrl="/dashboard/editspeciesmanagement";
  constructor(private router: Router) { }

  ngOnInit(): void {
    let table = $('table').DataTable({
      drawCallback: () => {
        $('.paginate_button.next').on('click', () => {
            this.nextButtonClickEvent();
          });
      }
    });
  }
  buttonInRowClick(event: any): void {
    event.stopPropagation();
    console.log('Button in the row clicked.');
  }

  wholeRowClick(): void {
    console.log('Whole row clicked.');
  }

  nextButtonClickEvent(): void {
    //do next particular records like  101 - 200 rows.
    //we are calling to api

    console.log('next clicked')
  }
  previousButtonClickEvent(): void {
    //do previous particular the records like  0 - 100 rows.
    //we are calling to API
  }
  addspeciesmanagement(){
    this.router.navigate([this.returnUrl]);
  }
  viewspeciesmanagement(){
    this.router.navigate([this.viewurl]);
  }
  editspeciesManagement(){
    this.router.navigate([this.editUrl]);
  }
  }

