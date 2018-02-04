import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  template: `
  <div class="section">

  <div class="container">
      <div class="tabs is-centered is-boxed">
          <ul>
              <li [routerLink]="['/me']" routerLinkActive="is-active">
                  <a>
                      <span>About Me</span>
                  </a>
              </li>
              <li [routerLink]="['/project']" routerLinkActive="is-active">
                  <a>
                      <span>About The Project</span>
                  </a>
              </li>
              <li [routerLink]="['/contact']" routerLinkActive="is-active">
                  <a>
                      <span>Contact Us</span>
                  </a>
              </li>
          </ul>
      </div>
      <router-outlet></router-outlet>
  </div>
</div>
  `,
  // styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor() {

  }
}
