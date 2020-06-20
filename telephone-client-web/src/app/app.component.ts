import { Component, ViewChild, ElementRef } from '@angular/core';
import { Phonenum} from './phonenum'
import { PhonenumService} from './phonenum.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telephone-client-web';
  @ViewChild('myInput', {static: true}) inputPhone: ElementRef;
  private phonenums : Phonenum[];

    constructor(private phonenumService: PhonenumService) {}

    ngOnInit() {
       // this.phonenums = this.phonenumService.getCombinations();
    }

    handleSubmit(){
      this.getCombinations(this.inputPhone.nativeElement.value);
    }
    // get the data from backend service api
  private getCombinations(inputPhone) {
    this.phonenumService.getCombinations(inputPhone).subscribe(data => {
      this.phonenums = data;
    });
  }
}


//https://www.techgeeknext.com/angular/angular-spring-boot-example