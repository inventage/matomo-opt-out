# \<matomo-opt-out>

A web component to let visitors opt-out of Matomo tracking.

[![made with open-wc](https://img.shields.io/badge/made%20with-open--wc-%23217ff9)](https://open-wc.org)
[![Node.js CI](https://github.com/inventage/matomo-opt-out/workflows/Node.js%20CI/badge.svg)](https://github.com/inventage/matomo-opt-out/actions?query=workflow%3A%22Node.js+CI%22)

## Dependencies

Your Matomo installation will have to have the [Ajax Opt Out] plugin enabled.

## Usage

```html
<matomo-opt-out matomo-url="https://analytics.your-domain.com"></matomo-opt-out>
```

### Properties

| Property    | Attribute    | Type     | Default | Description                         |
| ----------- | ------------ | -------- | ------- | ----------------------------------- |
| `matomoUrl` | `matomo-url` | `string` |         | The URL to your Matomo installation |

## Development

- Create a copy of `local.config-example.js` and name it `local.config.js`
- Add the URL to your Matomo installation
- Run `$ npm start`
- Navigate to http://localhost:8000/demo/

[ajax opt out]: https://plugins.matomo.org/AjaxOptOut
[lit-element]: https://lit-element.polymer-project.org/
[lit-html]: https://lit-html.polymer-project.org/
