import { css, LitElement } from 'lit-element';
import { html, nothing } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';

// @see https://github.com/iDerekLi/http-jsonp
import httpJsonp from 'http-jsonp';

export class MatomoOptOut extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--matomo-opt-out-text-color, #000);
      }

      :host([hidden]) {
        display: none;
      }

      .-busy,
      [disabled] {
        cursor: not-allowed;
      }

      .form-checkbox > .label.-busy {
        opacity: 0.75;
      }
    `;
  }

  static get properties() {
    return {
      matomoUrl: { type: String },
      optedOutLabel: { type: String },
      isTracked: { type: Boolean, attribute: false },
      isBusy: { type: Boolean, attribute: false },
    };
  }

  constructor() {
    super();
    this.matomoUrl = null;
    this.optedOutLabel = 'You are currently opted out. Check this box to opt-in.';
    this.optedInLabel = 'You are not opted out. Uncheck this box to opt-out.';
    this.isTracked = false;
    this.isBusy = false;
  }

  /**
   * Invoked each time the custom element is appended into a document-connected element.
   * This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  connectedCallback() {
    super.connectedCallback();

    if (!this.matomoUrl) {
      // eslint-disable-next-line no-console
      console.error(
        'Use the `matomo-url` property to specify the URL to your matomo installation.',
      );
    }
  }

  /**
   * Implement firstUpdated to perform one-time work after the element’s template has been created.
   *
   * We throw a custom `rendered` event so we can check when the element’s template has been created.
   *
   * @param changedProperties Map of changed properties with old values
   *
   * @see https://lit-element.polymer-project.org/guide/lifecycle#firstupdated
   */
  // eslint-disable-next-line no-unused-vars
  firstUpdated(changedProperties) {
    this._fetchTrackedState();
  }

  _toggleTrackedState(e) {
    if (!this._canUseApi()) {
      return;
    }

    const shouldTrack = e.currentTarget.checked;
    const targetApiMethod = shouldTrack ? 'doTrack' : 'doIgnore';

    this.isBusy = true;

    httpJsonp({
      url: this._getApiMethodUrl(targetApiMethod),
      callbackProp: 'callback',
      callback: data => {
        const { result } = data;
        if (result === 'success') {
          this.isTracked = !this.isTracked;
        }
      },
      error: error => {
        // eslint-disable-next-line no-console
        console.error('An error occurred when accessing `%s` API method.', targetApiMethod, error);
      },
      complete: () => {
        this.isBusy = false;
      },
    });
  }

  _fetchTrackedState() {
    if (!this._canUseApi()) {
      return;
    }

    this.isBusy = true;

    httpJsonp({
      url: this._getApiMethodUrl('isTracked'),
      callbackProp: 'callback',
      callback: data => {
        const { value } = data;
        if (value !== undefined) {
          this.isTracked = value;
        }
      },
      error: e => {
        // eslint-disable-next-line no-console
        console.error('An error occurred when accessing `isTracked` API method.', e);
      },
      complete: () => {
        this.isBusy = false;
      },
    });
  }

  _canUseApi() {
    return this.matomoUrl && !this.isBusy;
  }

  /**
   * Returns the URL to the given Matomo AjaxOptOut Plugin API method.
   *
   * @see https://github.com/lippoliv/piwik-plugin-ajaxoptout/blob/master/README.md
   * @param method
   * @private
   */
  _getApiMethodUrl(method) {
    return `${this.matomoUrl}/index.php?module=API&format=json&method=AjaxOptOut.${method}`;
  }

  render() {
    return !this.matomoUrl
      ? nothing
      : html`
          ${this.isTracked
            ? html`
                <slot name="opt-out">
                  <p>
                    You may choose to prevent this website from aggregating and analyzing the
                    actions you take here. Doing so will protect your privacy, but will also prevent
                    the owner from learning from your actions and creating a better experience for
                    you and other users.
                  </p>
                </slot>
              `
            : html`
                <slot name="opt-in">
                  <p>
                    Opt-out complete; your visits to this website will not be recorded by the Web
                    Analytics tool. Note that if you clear your cookies, delete the opt-out cookie,
                    or if you change computers or Web browsers, you will need to perform the opt-out
                    procedure again.
                  </p>
                </slot>
              `}

          <label class="form-checkbox">
            <input
              type="checkbox"
              class="input"
              @change=${this._toggleTrackedState}
              ?checked=${this.isTracked}
              ?disabled=${this.isBusy}
            />
            <span
              class=${classMap({
                label: true,
                '-busy': this.isBusy,
              })}
            >
              ${this.isTracked ? this.optedInLabel : this.optedOutLabel}
            </span>
          </label>
        `;
  }
}

window.customElements.define('matomo-opt-out', MatomoOptOut);
