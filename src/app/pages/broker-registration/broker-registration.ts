import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-broker-registration',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './broker-registration.html',
  styleUrl: './broker-registration.scss'
})
export class BrokerRegistration {
  form = {
    name: '',
    email: '',
    phone: '',
    company: '',
    rera: '',
    city: '',
    experience: '',
    message: ''
  };

  submitted = false;

  benefits = [
    { icon: '💰', title: 'Attractive Commissions', desc: 'Earn industry-leading commissions on every successful referral and sale.' },
    { icon: '🏆', title: 'Rewards & Incentives', desc: 'Exclusive rewards, bonuses, and recognition for top-performing brokers.' },
    { icon: '📋', title: 'Marketing Support', desc: 'Access to premium marketing materials, brochures, and digital assets.' },
    { icon: '🤝', title: 'Dedicated RM', desc: 'A dedicated relationship manager to support your sales and client queries.' },
    { icon: '📊', title: 'Sales Dashboard', desc: 'Real-time tracking of your referrals, earnings, and project updates.' },
    { icon: '🎓', title: 'Training Programs', desc: 'Regular product training and knowledge sessions to boost your sales.' }
  ];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', phone: '', company: '', rera: '', city: '', experience: '', message: '' };
    }, 4000);
  }
}
