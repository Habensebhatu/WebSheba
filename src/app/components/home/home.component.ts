import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../customer/customer.class';
import { RequestQuoteService } from 'src/app/service/request-quote.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerForm!: FormGroup;
  private unsubscribe$ = new Subject<void>();
  toggel = true
 

  constructor(private formBuilder: FormBuilder, public customerservice: RequestQuoteService,  private router: Router,) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      body: ['']
    });
  }

  onSubmit() {
    if (this.customerForm && this.customerForm.valid) {
      const newCustomer = new Customer(this.customerForm.value);
      newCustomer.Telephone = newCustomer.Telephone.toString();
      console.log(newCustomer);
      this.toggel = false
      this.customerservice.submitQuotationForm(newCustomer)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: (next) => {
            this.customerForm.reset();
            this.toggel = false
          }
        });
    }
  }

  BackToHame(){
  this.toggel = true;
  }
}
