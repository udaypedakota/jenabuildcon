import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';
import { BrokerRegistration } from './pages/broker-registration/broker-registration';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'ongoing-projects', component: Projects, data: { type: 'ongoing' } },
  { path: 'past-projects', component: Projects, data: { type: 'past' } },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'broker-registration', component: BrokerRegistration },
  { path: '**', redirectTo: '' }
];
