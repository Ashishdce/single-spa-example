import { Component } from '@angular/core';

@Component({
  selector: 'about-project-component',
  template: `
  <div class="card">
  <div class="card-content">
      <p class="title is-4">Single SPA Example</p>
      <p class="subtitle is-6">by Ashish Jangid</p>
      <div class="content">
          Esse Lorem amet et consectetur sunt dolor sunt nulla fugiat officia labore excepteur voluptate et. Enim excepteur amet nostrud enim aute cillum quis aute. Sit qui excepteur commodo incididunt dolore cupidatat. Magna occaecat reprehenderit nulla dolor.
          Nisi pariatur nisi velit laborum occaecat Lorem consectetur velit amet.Enim nulla quis magna dolore mollit. Elit tempor labore nostrud laboris enim magna labore. Duis eu ea exercitation sit Lorem incididunt. Sit tempor quis quis pariatur laborum
          quis qui reprehenderit nostrud. Magna ad ea commodo ut Lorem aliqua.Nisi eiusmod elit dolore dolor officia dolore. Aliquip ad cupidatat dolor deserunt nisi pariatur culpa in eu culpa fugiat est ea cupidatat. Pariatur voluptate sint laborum
          sit amet ad elit do ea labore aute velit adipisicing.<a href="https://github.com/ashishdce" target="_blank">ashishdce</a>.
          <br>
          <time datetime="2017-2-4">Last Modified: 4 Feb 2018</time>
      </div>
  </div>
  <footer class="card-footer">
      <p class="card-footer-item">
          <span>
            View on <a href="https://github.com/ashishdce">Github</a>
          </span>
      </p>
      <p class="card-footer-item">
          <span>
            Share on <a href="#">Facebook</a>
          </span>
      </p>
      <p class="card-footer-item">
          <span>
            Share on <a href="#">LinkedIn</a>
          </span>
      </p>
  </footer>
</div>
  `
})
export class AboutProjectComponent {
  constructor() {

  }
}
