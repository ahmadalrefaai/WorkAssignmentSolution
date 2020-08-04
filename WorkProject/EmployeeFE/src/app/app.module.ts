
    import { BrowserModule } from '@angular/platform-browser';  
    import { NgModule } from '@angular/core';  
      
    import { AppComponent } from './app.component';  
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
    import { HttpClientModule }    from '@angular/common/http';  
   import { ServiceService } from './service.service';
   import { MatTableModule } from '@angular/material/table';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      
      ],  
      providers: [ServiceService],  
      bootstrap: [AppComponent]  
    })  
    export class AppModule { }  
