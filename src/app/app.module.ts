import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { StartPageComponent } from './main/pages/start-page/start-page.component';
import { CoursesPageComponent } from './main/pages/courses-page/courses-page.component';
import { QuizComponent } from './main/pages/quiz/quiz.component';
import { CourseDetailsComponent } from './main/pages/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    QuizComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
