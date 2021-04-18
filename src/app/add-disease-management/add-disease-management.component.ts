import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var require: any;
@Component({
  selector: 'app-add-disease-management',
  templateUrl: './add-disease-management.component.html',
  styleUrls: ['./add-disease-management.component.css']
})
export class AddDiseaseManagementComponent implements OnInit {
  returnUrl= '/dashboard/diseasemanagement';
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
   
  }
  
  diseaseManagement(){
    this.router.navigate([this.returnUrl]);
  }
}
