import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Import HttpClientModule from @angular/common/http in AppModule
import {HttpClientModule} from '@angular/common/http';


//in place where you wanted to use `HttpClient`
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { TexttospeechComponent } from './components/texttospeech/texttospeech.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    TexttospeechComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
