import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vaccinemanagement',
  templateUrl: './vaccinemanagement.component.html',
  styleUrls: ['./vaccinemanagement.component.css']
})
export class VaccinemanagementComponent implements OnInit {
  returnUrl= "/dashboard/addvaccinemanagement";
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
  addvaccinemanagement(){
    this.router.navigate([this.returnUrl]);
  }
  }


