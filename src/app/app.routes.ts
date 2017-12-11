import { RouterModule } from '@angular/router';

export const appRouets = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'jokes',
        loadChildren: './jokes/jokes.module#JokesModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];