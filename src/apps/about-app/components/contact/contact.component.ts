import { Component } from '@angular/core';

@Component({
  selector: 'contact-component',
  template: `
  <div class="has-text-centered">
  <div class="columns">
      <div class="column is-half-tablet is-offset-one-quarter">
          <p class="subtitle is-6">Leave A Message..</p>
          <div class="field">
              <div class="control">
                  <input class="input" type="text" placeholder="Name">
              </div>
          </div>

          <div class="field">
              <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email">
              </div>
          </div>

          <div class="field">
              <div class="control">
                  <textarea class="textarea" placeholder="Message"></textarea>
              </div>
          </div>

          <div class="field is-grouped">
              <div class="control">
                  <button class="button is-primary">Send Message</button>
              </div>
              <div class="control">
                  <button class="button is-text">Cancel</button>
              </div>
          </div>
      </div>
  </div>
</div>
  `
})
export class ContactComponent {
  constructor() {

  }
}
