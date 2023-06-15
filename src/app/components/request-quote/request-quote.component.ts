import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.css']
})
export class RequestQuoteComponent {
 

constructor(private router: Router){

}
  BackToHame(){
    this.router.navigate(['/home']);
  }
}
