import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass']
})
export class StartPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateQuiz() {
    this.router.navigate(['/quiz'])
  }

  navigateCourses() {
    this.router.navigate(['/courses'])
  }
}
