import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  goldvalue = <any>{};
  element= <any>{};
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    if(!localStorage.getItem('ln')){
      localStorage.setItem('ln','en');
    }
    let lung = localStorage.getItem('ln');
    this.translateService.use(lung);
    
    // this.element = document.getElementById("mySelect1");
    // this.element.value = lung;
  }
  switchLanguage(language: string) {
    localStorage.setItem('ln',language);
    this.translateService.use(language);
  }
  modo(value: string){
    switch(value) {
      case "en":
        
    localStorage.setItem('ln',value);
    this.translateService.use(value);
         break;
      case "ur":
      localStorage.setItem('ln',value);
      this.translateService.use(value);
         break;
    }
  }

}
