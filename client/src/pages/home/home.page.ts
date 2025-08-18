import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FeaturesSection } from './features-section/features-section.component';
import { FaqSection } from './faq-section/faq-section.component';
import { Button } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [RouterLink, FeaturesSection, FaqSection, Button],
})
export class HomePage {
  constructor(activatedRoute: ActivatedRoute, protected router: Router) {
    activatedRoute.params.subscribe((params) => {
      // console.log(params);
    });
  }

  onSignUp() {
    this.router.navigateByUrl('/auth/sign-up');
  }

  onSignIn() {
    this.router.navigateByUrl('/auth/sign-in');
  }
}
