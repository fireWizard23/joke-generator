import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JokeFilterComponent } from './components/joke-filter/joke-filter.component';
import { JokePageComponent } from './components/joke-page/joke-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'joke/filter',
    component: JokeFilterComponent
  },
  {
    path: 'joke/:id',
    component: JokePageComponent
  },
  {
    path: '**' ,
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
