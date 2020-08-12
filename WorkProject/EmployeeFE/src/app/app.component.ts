import { Component } from '@angular/core';  
import {ServiceService} from './service.service';  
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { OnInit, ElementRef, NgZone } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';


@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  title = 'EmployeeFE';  
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  map: Leaflet.Map;
  private geoCoder;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private ServiceService: ServiceService) { }  

  data: any;


  EmpForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    "eId",
    "eName",
    "eAddress",
    "eAge",
    "Actions"
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {  
    this.getdata();  
    this.EmpForm = new FormGroup({  
      eId: new FormControl(null),  
      eName: new FormControl("",[Validators.required]),        
      eAddress: new FormControl("",[Validators.required]),  
      eEmail:new FormControl("",[Validators.required]),  
      eAge: new FormControl("", [Validators.minLength(2), Validators.maxLength(2), Validators.required]),  
    })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.map = Leaflet.map('map').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
    


  }
     
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  getdata() {  
    this.ServiceService.getData().subscribe((data: any[]) => {  
      this.data = data;
      this.dataSource.data = data
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