import { Routes } from '@angular/router';
import { Index } from './todo/index';
import { Create } from './todo/create/create';

export const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: "todos", component: Index },
    { path: "todos/create", component: Create },
];
