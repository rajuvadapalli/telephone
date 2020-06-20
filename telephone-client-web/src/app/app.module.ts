import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonenumComponent } from './phonenum/phonenum.component';
import { PhonenumService} from './phonenum.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhonenumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PhonenumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
