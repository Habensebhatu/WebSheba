import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestQuoteService {

  private apiUrl = 'https://localhost:7218/api/quote'; // Replace with your actual API URL
  private apiUrll = 'https://apiwebexperts.azurewebsites.net/api/quote/uploadCustomersfile'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  submitQuotationForm(formData: any) {
    console.log("service", formData.Telephone, typeof formData.Telephone);

    return this.http.post(this.apiUrll, formData); 
  }
}
