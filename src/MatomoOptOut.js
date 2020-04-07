import { css, LitElement } from 'lit-element';
import { html } from 'lit-html';

export class MatomoOptOut extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--matomo-opt-out-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <p>
        You may choose to prevent this website from aggregating and analyzing the actions you take
        here. Doing so will protect your privacy, but will also prevent the owner from learning from
        your actions and creating a better experience for you and other users.
      </p>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

window.customElements.define('matomo-opt-out', MatomoOptOut);
