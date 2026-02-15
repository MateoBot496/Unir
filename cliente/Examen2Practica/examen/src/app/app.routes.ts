import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Form } from './pages/form/form';
import { List } from './pages/list/list';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'form', component: Form },
  { path: 'list', component: List },
];
