import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

const dev = (n: string, v = 'original') =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${n}/${n}-${v}.svg`;
const vz = (n: string) => `https://www.vectorlogo.zone/logos/${n}/${n}-icon.svg`;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  skillGroups = [
    { id: 'programming', name: 'Languages', items: [
      { name: 'Java', icon: dev('java') }, { name: 'Python', icon: dev('python') },
      { name: 'C#', icon: dev('csharp') }, { name: 'SQL', icon: '' },
      { name: 'JavaScript', icon: dev('javascript') }, { name: 'TypeScript', icon: dev('typescript') },
      { name: 'HTML5', icon: dev('html5') }, { name: 'CSS3', icon: dev('css3') } ] },
    { id: 'frameworks', name: 'Frameworks', items: [
      { name: 'Spring Boot', icon: vz('springio') }, { name: 'Angular', icon: dev('angular') },
      { name: 'React', icon: dev('react') }, { name: 'ASP.NET Core', icon: dev('dot-net') },
      { name: '.NET Core', icon: dev('dot-net') } ] },
    { id: 'databases', name: 'Databases', items: [
      { name: 'PostgreSQL', icon: dev('postgresql') }, { name: 'MySQL', icon: dev('mysql') },
      { name: 'MongoDB', icon: dev('mongodb') },
      { name: 'SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' } ] },
    { id: 'devops', name: 'Cloud and DevOps', items: [
      { name: 'Azure', icon: vz('microsoft_azure') }, { name: 'Docker', icon: dev('docker') },
      { name: 'Kubernetes', icon: vz('kubernetes') }, { name: 'CI/CD', icon: '' } ] },
    { id: 'tools', name: 'Tools', items: [
      { name: 'Git', icon: vz('git-scm') }, { name: 'GitHub', icon: dev('github') },
      { name: 'IntelliJ IDEA', icon: dev('intellij') }, { name: 'Postman', icon: vz('getpostman') },
      { name: 'SoapUI', icon: '' } ] },
    { id: 'methods', name: 'Methodologies', items: [
      { name: 'Agile' , icon: '' }, { name: 'Scrum', icon: '' }, { name: 'SDLC', icon: '' },
      { name: 'REST and SOAP', icon: '' }, { name: 'Microservices', icon: '' },
      { name: 'Unit testing', icon: '' }, { name: 'Code reviews', icon: '' } ] }
  ];

  formData = { name: '', email: '', phone: '', subject: '', message: '' };
  submitting = false;
  submitSuccess = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.submitting = true;
    this.submitSuccess = false;
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
          this.errorMessage = 'Your message was not sent. Check your connection and try again.';
          console.error('Error submitting form:', err);
        }
      });
  }
}