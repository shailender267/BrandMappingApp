import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrandingComponent } from './Branding.component';
import { DragDropDirectiveModule } from "angular4-drag-drop";
import { brandingservice } from '././services/brandingservice.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
	  AppComponent,
    BrandingComponent
  ],
  imports: [
    BrowserModule,
    DragDropDirectiveModule,
    HttpModule,
    FormsModule
  ],
  providers: [brandingservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
