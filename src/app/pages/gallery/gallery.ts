import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, CommonModule, TitleCasePipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  activeFilter = 'all';
  lightboxOpen = false;
  lightboxImage = '';
  lightboxIndex = 0;

  filters = ['all', 'plots', 'villas', 'amenities', 'interiors'];

  images = [
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=70', alt: 'Niladri Heritage', category: 'plots' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=70', alt: 'Luxury Villa', category: 'villas' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=70', alt: 'Modern Interior', category: 'interiors' },
    { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=70', alt: 'Premium Home', category: 'villas' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=70', alt: 'Elite Gardens', category: 'plots' },
    { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=70', alt: 'Swimming Pool', category: 'amenities' },
    { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70', alt: 'Office Building', category: 'villas' },
    { src: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&q=70', alt: 'Lakeside Villa', category: 'villas' },
    { src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=400&q=70', alt: 'Living Room', category: 'interiors' },
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=70', alt: 'Modern Kitchen', category: 'interiors' },
    { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=70', alt: 'Club House', category: 'amenities' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70', alt: 'Green Park', category: 'amenities' },
  ];

  get filteredImages() {
    if (this.activeFilter === 'all') return this.images;
    return this.images.filter(img => img.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxImage = this.filteredImages[index].src;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  lightboxNext() {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.filteredImages.length;
    this.lightboxImage = this.filteredImages[this.lightboxIndex].src;
  }

  lightboxPrev() {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.lightboxImage = this.filteredImages[this.lightboxIndex].src;
  }
}
