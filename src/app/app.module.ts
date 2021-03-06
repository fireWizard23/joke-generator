import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JokePageComponent } from './components/joke-page/joke-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShareModule } from 'ngx-sharebuttons';
import { JokeFilterComponent } from './components/joke-filter/joke-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokeFilterFormComponent } from './components/joke-filter-form/joke-filter-form.component';
import { JokifyPipe } from './pipes/jokify.pipe';
import { JokeComponent } from './components/joke/joke.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    JokePageComponent,
    NotFoundComponent,
    JokeFilterComponent,
    JokeFilterFormComponent,
    JokifyPipe,
    JokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
