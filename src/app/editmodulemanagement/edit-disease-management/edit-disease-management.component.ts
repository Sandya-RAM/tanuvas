import { Component,OnInit,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-edit-disease-management',
  templateUrl: './edit-disease-management.component.html',
  styleUrls: ['./edit-disease-management.component.css']
})
export class EditDiseaseManagementComponent implements OnInit {
  returnUrl= '/dashboard/diseasemanagement';
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
      $('.selectpicker').selectpicker('refresh');
   
  }
  AfterViewInit(): void {
   
  }
  diseaseManagement(){
    this.router.navigate([this.returnUrl]);
  }
}
