import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  form = {
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Reset after 4s
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', phone: '', message: '', interest: '' };
    }, 4000);
  }
}
