import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [RouterLink, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  constructor(private sanitizer: DomSanitizer) {
    this.values = this._rawValues.map(v => ({
      ...v,
      icon: this.sanitizer.bypassSecurityTrustHtml(v.icon) as SafeHtml
    }));
  }

  values: { icon: SafeHtml; title: string; desc: string }[] = [];

  private _rawValues = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Integrity',
      desc: 'We operate with complete transparency and honesty in every transaction and interaction.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      title: 'Excellence',
      desc: 'Every project is delivered with uncompromising quality and meticulous attention to detail.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
      title: 'Community',
      desc: 'We build more than homes — we create thriving communities where lives flourish.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      title: 'Timeliness',
      desc: 'We respect your time and ensure all projects are completed within committed timelines.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
      title: 'Innovation',
      desc: 'We constantly evolve our designs and processes to stay ahead of modern living needs.'
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
      title: 'Customer First',
      desc: 'Your satisfaction is our highest priority. We listen, understand, and deliver.'
    }
  ];

  team = [
    { name: 'Rajesh Jena', role: 'Founder & Chairman', bio: 'Visionary leader with 30+ years in real estate, transforming Odisha\'s landscape with premium developments.' },
    { name: 'Sunita Jena', role: 'Managing Director', bio: 'Drives strategic growth and customer relations, ensuring every client has an exceptional experience.' },
    { name: 'Arjun Jena', role: 'Head of Projects', bio: 'Oversees all construction and development activities, maintaining the highest standards of quality.' },
    { name: 'Priya Mishra', role: 'Sales Director', bio: 'Leads the sales team with a customer-centric approach and deep market knowledge.' }
  ];
}
