
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


import { MatButtonModule } from '@angular/material/button'; 

import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
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
        MatButtonModule


      
      ],  
      providers: [ServiceService], 
      bootstrap: [AppComponent]  
    })  
    export class AppModule { }  
