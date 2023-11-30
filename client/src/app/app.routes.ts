import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BabyDecorComponent } from './components/baby-decor/baby-decor.component';
import { WorkSamplesComponent } from './components/work-samples/work-samples.component';
import { ChildrenCastleComponent } from './components/children-castle/children-castle.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'work-samples', component: WorkSamplesComponent },
    { path: 'baby-decor', component: BabyDecorComponent },
    { path: 'children-castle', component: ChildrenCastleComponent },
    {path: 'contact-us', component: ContactUsComponent}
];
