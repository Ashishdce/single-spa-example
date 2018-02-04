import { Component } from '@angular/core';

@Component({
  selector: 'about-me-component',
  template: `
  <div class="card">
  <div class="card-content">
      <div class="media">
          <div class="media-left">
              <figure class="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
          </div>
          <div class="media-content">
              <p class="title is-4">Ashish Jangid</p>
              <p class="subtitle is-6">@ashishdce</p>
          </div>
      </div>

      <div class="content">
          Esse Lorem amet et consectetur sunt dolor sunt nulla fugiat officia labore excepteur voluptate et. Enim excepteur amet nostrud enim aute cillum quis aute. Sit qui excepteur commodo incididunt dolore cupidatat. Magna occaecat reprehenderit nulla dolor.
          Nisi pariatur nisi velit laborum occaecat Lorem consectetur velit amet.Enim nulla quis magna dolore mollit. Elit tempor labore nostrud laboris enim magna labore. Duis eu ea exercitation sit Lorem incididunt. Sit tempor quis quis pariatur laborum
          quis qui reprehenderit nostrud. Magna ad ea commodo ut Lorem aliqua.Nisi eiusmod elit dolore dolor officia dolore. Aliquip ad cupidatat dolor deserunt nisi pariatur culpa in eu culpa fugiat est ea cupidatat. Pariatur voluptate sint laborum
          sit amet ad elit do ea labore aute velit adipisicing.<a href="https://github.com/ashishdce" target="_blank">@ashishdce</a>.
          <br>
          <br>
          <time datetime="2017-2-4">4 Feb 2018</time>
      </div>
  </div>
</div> 
`
})
export class AboutMeComponent {
  constructor() {

  }
}
