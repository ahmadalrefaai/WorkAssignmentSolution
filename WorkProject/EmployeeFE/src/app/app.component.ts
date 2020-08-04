import { Component } from '@angular/core';  
import {ServiceService} from './service.service';  
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  title = 'EmployeeFE';  
     
  constructor(private ServiceService: ServiceService) { }  
  data: any;  
  EmpForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  
  dataSource: any[];
  displayedColumns: string[] = [
    "eId",
    "eName",
    "eAddress",
    "eAge",
    "editAction",
    "deleteAction"
  ];
  ngOnInit(): void {  
    this.getdata();  
  
    this.EmpForm = new FormGroup({  
      eId: new FormControl(null),  
      eName: new FormControl("",[Validators.required]),        
      eAddress: new FormControl("",[Validators.required]),  
      eEmail:new FormControl("",[Validators.required]),  
      eAge: new FormControl("",[Validators.required]),  
    })    
  }  
  getdata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;
      this.dataSource = data;
    })  
  }  
  deleteData(element) {  
    this.ServiceService.deleteData(element.eId).subscribe((data: any[]) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  
  Save() {   
    this.submitted = true;  
    
     if (this.EmpForm.invalid) {  
            return;  
     }  
    this.ServiceService.postData(this.EmpForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
  
    })  
  }  
  Update() {   
    this.submitted = true;  
    
    if (this.EmpForm.invalid) {  
     return;  
    }        
    this.ServiceService.putData(this.EmpForm.value.eId, this.EmpForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(element) {  
    this.EmpForm.controls["eId"].setValue(element.eId);  
    this.EmpForm.controls["eName"].setValue(element.eName);      
    this.EmpForm.controls["eAddress"].setValue(element.eAddress);  
    this.EmpForm.controls["eEmail"].setValue(element.eEmail);  
    this.EmpForm.controls["eAge"].setValue(element.eAge);  
    this.EventValue = "Update";  
  }  
  
  resetFrom()  
  {     
    this.getdata();  
    this.EmpForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }  
} 