# \<matomo-opt-out>

A web component to let visitors opt-out of Matomo tracking.

[![made with open-wc](https://img.shields.io/badge/made%20with-open--wc-%23217ff9)](https://open-wc.org)
[![Node.js CI](https://github.com/inventage/matomo-opt-out/workflows/Node.js%20CI/badge.svg)](https://github.com/inventage/matomo-opt-out/actions?query=workflow%3A%22Node.js+CI%22)

## Dependencies

Your Matomo installation will have to have the [Ajax Opt Out] plugin enabled.

## Usage

```js
import '@inventage/matomo-opt-out';
```

```html
<matomo-opt-out matomo-url="https://analytics.your-domain.com"></matomo-opt-out>
```

### Note on browser compatibility & transformation

Currently, the recommended way to publish a web component using [open-wc] is to publish the ES6/7 source code as is. 
Since your application knows best about which browsers to support and how to transform the source code (if at all)
for those browsers, you will have to take care of any transformations yourself.

### Properties

| Property        | Attribute         | Type      | Default                                                  |
| --------------- | ----------------- | --------- | -------------------------------------------------------- |
| `isBusy`        |                   | `boolean` | false                                                    |
| `isTracked`     |                   | `boolean` | false                                                    |
| `matomoUrl`     | `matomo-url`      | `string`  |                                                          |
| `optedInLabel`  | `opted-in-label`  | `string`  | "You are not opted out. Uncheck this box to opt-out."    |
| `optedOutLabel` | `opted-out-label` | `string`  | "You are currently opted out. Check this box to opt-in." |

## Development

- Create a copy of `local.config-example.js` and name it `local.config.js`
- Add the URL to your Matomo installation
- Run `$ npm start`
- Navigate to http://localhost:8000/demo/

[ajax opt out]: https://plugins.matomo.org/AjaxOptOut
[lit-element]: https://lit-element.polymer-project.org/
[lit-html]: https://lit-html.polymer-project.org/
[open-wc]: https://open-wc.org
