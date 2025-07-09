import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitting = false;
  submitSuccess = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.submitting = true;
    this.errorMessage = '';
    
    this.http.post('https://portfolio-l3qx.onrender.com/api/contact', this.formData)
      .subscribe({
        next: () => {
          this.submitSuccess = true;
          this.submitting = false;
          this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
        },
        error: (err) => {
          this.submitting = false;
          this.errorMessage = 'Failed to send message. Please try again later.';
          console.error('Error submitting form:', err);
        }
      });
  }
}

// 
