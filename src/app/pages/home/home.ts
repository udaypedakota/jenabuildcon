import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;

  heroSlides = [
    {
      tag: 'Living Luxury',
      title: 'DISCOVER UNMATCHED',
      titleAccent: 'STYLE & SOPHISTICATION',
      subtitle: 'Premium residential plots and homes crafted with elegance and precision'
    },
    {
      tag: 'Premium Living',
      title: 'BUILD YOUR DREAM',
      titleAccent: 'HOME WITH US',
      subtitle: 'Over 25 years of excellence in delivering landmark developments'
    },
    {
      tag: 'Trusted Developers',
      title: 'WHERE QUALITY',
      titleAccent: 'MEETS LUXURY',
      subtitle: '75,000+ happy plot owners across Odisha and beyond'
    }
  ];

  stats = [
    { value: '25+', label: 'Years of Experience', desc: 'in delivering premium plotting and 12+ years of delivering projects with precision and quality' },
    { value: '17500', label: 'Acres+ Plotting', desc: '3.6 L sqft of thoughtfully designed areas, maximizing space and natural light' },
    { value: '75000+', label: 'Happy Plot Owners', desc: '500+ happy homeowners, a testament to our commitment to customer satisfaction' }
  ];

  testimonials = [
    {
      name: 'Ravina Singh',
      role: 'IT Professional, Bangalore',
      text: 'Saptagiri Developers helped me find my perfect home. From site visits to final possession, the entire journey was smooth and transparent. I highly recommend them for their commitment and professionalism.',
      rating: 5
    },
    {
      name: 'Himansu Sahoo',
      role: 'Happy Homeowner',
      text: 'We were impressed with the construction quality and timely updates. The team was always approachable and made the buying process stress-free. Definitely a name you can trust.',
      rating: 5
    },
    {
      name: 'Nasima Saheen',
      role: 'Chartered Accountant',
      text: 'As a first-time buyer, I had many concerns—but they exceeded my expectations. Great locations, modern amenities, and excellent customer support throughout the process.',
      rating: 5
    }
  ];

  currentTestimonial = 0;
  private testimonialInterval: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);

    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.slideInterval) clearInterval(this.slideInterval);
    if (this.testimonialInterval) clearInterval(this.testimonialInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.heroSlides.length) % this.heroSlides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
