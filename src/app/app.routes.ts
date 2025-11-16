import { Routes } from '@angular/router';
import { StudentListComponent } from './Components/student-list/student-list';

export const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

