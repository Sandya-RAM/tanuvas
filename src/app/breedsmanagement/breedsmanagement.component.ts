import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-breedsmanagement',
  templateUrl: './breedsmanagement.component.html',
  styleUrls: ['./breedsmanagement.component.css']
})
export class BreedsmanagementComponent implements OnInit {
  returnUrl= "/dashboard/addbreedsmanagement";
  viewurl= "/dashboard/viewbreedsmanagement";
  editUrl="/dashboard/editbreedsmanagement"
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
  addbreedsmanagement(){
    this.router.navigate([this.returnUrl]);
  }
  viewbreedsmanagement(){
    this.router.navigate([this.viewurl]);
  }
  editbreedsmanagement(){
    this.router.navigate([this.editUrl]);
  }
  }

