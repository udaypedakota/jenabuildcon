import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  projectType: 'ongoing' | 'past' = 'ongoing';
  pageTitle = 'ONGOING PROJECTS';

  ongoingProjects = [
    {
      name: 'Niladri Heritage',
      location: 'Puri, Odisha',
      type: 'Residential Plots',
      area: '2400 sq.ft - 4800 sq.ft',
      status: 'Ongoing',
      desc: 'A premium residential plotted development set amid lush greenery in the holy city of Puri. Niladri Heritage offers spacious plots with modern infrastructure and seamless connectivity.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
      amenities: ['24/7 Security', 'Wide Roads', 'Underground Drainage', 'Parks & Gardens', 'DTCP Approved']
    },
    {
      name: 'Saptagiri Meadows',
      location: 'Bhubaneswar, Odisha',
      type: 'Gated Community',
      area: '1800 sq.ft - 3600 sq.ft',
      status: 'Ongoing',
      desc: 'An exclusive gated community offering premium plots with world-class amenities in the capital city of Odisha, perfectly blending convenience and luxury.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80',
      amenities: ['Club House', 'Swimming Pool', 'Gymnasium', 'Children\'s Play Area', 'Power Backup']
    },
    {
      name: 'Royal Enclave',
      location: 'Berhampur, Odisha',
      type: 'Residential Plots',
      area: '1200 sq.ft - 2400 sq.ft',
      status: 'Ongoing',
      desc: 'Royal Enclave promises premium living at an accessible price point with well-planned plots and modern infrastructure in the heart of Berhampur.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
      amenities: ['Gated Community', 'Tar Roads', 'Street Lighting', 'Water Supply', 'Legal Clear Title']
    }
  ];

  pastProjects = [
    {
      name: 'Saptagiri Hills',
      location: 'Puri, Odisha',
      type: 'Residential Plots',
      area: '2200 sq.ft - 5000 sq.ft',
      status: 'Completed',
      desc: 'Successfully delivered premium residential plots across 450 acres with all modern amenities. 100% possession completed.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
      amenities: ['Fully Developed', 'All Amenities', 'Legal Clear', 'Possession Completed']
    },
    {
      name: 'Green Valley Township',
      location: 'Bhubaneswar, Odisha',
      type: 'Township',
      area: '1500 sq.ft - 3000 sq.ft',
      status: 'Completed',
      desc: 'A landmark township project with 2500+ plots handed over to happy homeowners. One of our most successful developments.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
      amenities: ['2500+ Plots', 'Complete Infrastructure', 'Schools Nearby', 'Market Complex']
    },
    {
      name: 'Sunrise Gardens',
      location: 'Berhampur, Odisha',
      type: 'Residential Plots',
      area: '1000 sq.ft - 2000 sq.ft',
      status: 'Completed',
      desc: 'An affordable luxury plotted development that brought homeownership dreams to life for hundreds of families.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
      amenities: ['Gated Entry', 'Park', 'Drainage', 'Electricity', 'Water Connection']
    },
    {
      name: 'Lakeside Villas',
      location: 'Puri, Odisha',
      type: 'Villas',
      area: '3000 sq.ft - 6000 sq.ft',
      status: 'Completed',
      desc: 'Premium luxury villas overlooking a serene lakeside setting. Fully occupied with delighted homeowners.',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80',
      amenities: ['Lake View', 'Private Parking', 'Landscaped Gardens', 'Club House', 'Smart Home']
    }
  ];

  get projects() {
    return this.projectType === 'ongoing' ? this.ongoingProjects : this.pastProjects;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.projectType = data['type'] || 'ongoing';
      this.pageTitle = this.projectType === 'ongoing' ? 'ONGOING PROJECTS' : 'PAST PROJECTS';
    });
  }
}
