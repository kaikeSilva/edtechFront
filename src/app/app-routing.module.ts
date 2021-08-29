import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './main/pages/courses-page/courses-page.component';
import { QuizComponent } from './main/pages/quiz/quiz.component';
import { StartPageComponent } from './main/pages/start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
