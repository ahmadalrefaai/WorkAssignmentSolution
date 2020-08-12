
    import { BrowserModule } from '@angular/platform-browser';  
    import { NgModule } from '@angular/core';    
    import { AppComponent } from './app.component';  
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
    import { HttpClientModule }    from '@angular/common/http';  
    import { ServiceService } from './service.service';
    import { MatTableModule } from '@angular/material/table';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatPaginator } from '@angular/material/paginator';
    import { MatInputModule } from '@angular/material/input';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
    import { MatButtonModule } from '@angular/material/button'; 
    import { MatSortModule } from '@angular/material/sort'; 
    import { MatPaginatorModule } from '@angular/material/paginator';
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
    import { GoogleMapsModule } from '@angular/google-maps';

    @NgModule({  
      declarations: [  
        AppComponent
      ],  
      imports: [  
        BrowserModule,  
        FormsModule,  
        ReactiveFormsModule,  
        HttpClientModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        NgbModule,
        GoogleMapsModule


      
      ],  
      providers: [ServiceService], 
      bootstrap: [AppComponent]  
    })  
    export class AppModule { }  
