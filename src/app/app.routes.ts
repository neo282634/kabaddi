import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { PhotoGalleryComponent } from './gallery/photo-gallery/photo-gallery.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'members', component: MembersComponent
    },
    {
        path: 'gallery/photo-gallery', component: PhotoGalleryComponent
    }
];
