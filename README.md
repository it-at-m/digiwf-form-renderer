<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" width="80" height="80">

<h3 align="center">DigiWF Form Renderer</h3>

 <!-- <p align="center">
    This is the json schema form renderer used and developed by DigiWF
    <br />
    <a href="https://github.com/it-at-m/digiwf-form-renderer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/it-at-m/digiwf-form-renderer">View Demo</a>
    ·
    <a href="https://github.com/it-at-m/digiwf-form-renderer/issues">Report Bug</a>
    ·
    <a href="https://github.com/it-at-m/igiwf-form-renderer/issues">Request Feature</a>
  </p> -->
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [DigiWF Vuetify Component Starter](https://github.com/it-at-m/digiwf-vuetify-component-starter)
* [Vue.js](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/)
* [Vuetify Json Schema Form](https://github.com/koumoul-dev/vuetify-jsonschema-form)

<p align="right">(<a href="#top">back to top</a>)</p>


## Getting Started

_Below is an example of how you can installing and setup up your service_

1. `git clone `
2. `npm install`
3. `npm run build`

### Developing the library locally

1. Start the dev server with `npm run serve`

### Use your library in another project locally

Run the following commands in your library:

1. `npm run build`
2. `npm run pack`

Make sure you have provided all the necessary dependencies in your vuetify project and add the library vai `file path`:

```
"digiwf-form-renderer": "file:../digiwf-form-renderer-0.0.1.tgz"
```

_For more examples, and how to use the underlying vjsf library, please refer to
the [Documentation](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The package can be used by following these steps:

1. install the package

``npm install @muenchen/digiwf-form-renderer --save``

2. import form and/or renderer in main.ts
```
import {VJsonForm, VJsonRenderer} from "@muenchen/digiwf-form-renderer";

Vue.component('VDivider', VDivider);
Vue.component('VJsonForm', VJsonForm);
Vue.component('VJsonRenderer', VJsonRenderer);
```

3. use it

```
  <v-json-form
    :value="value"
    :schema="schema"
    @complete-form="complete"
    button-text="Validate"
  >
  </v-json-form>
```

if you want to pass custom fields to the renderer use template slots

```
  <v-json-form
    :value="value"
    :schema="schema"
    @complete-form="complete"
    button-text="Validate"
  >
    <template
      v-slot:custom-user-input="context">
      <v-autocomplete outlined dense v-bind="context"></v-autocomplete>
    </template>
  </v-json-form>
```

_For more examples, and how to use the underlying vjsf library, please refer to the [Documentation](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Modifying Default VJSF Options
- [ ] Enhanced Validation with ajv
- [ ] I18n Support

See the [open issues](https://github.com/it-at-m/igiwf-form-renderer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE 
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
-->


<!-- CONTACT -->
## Contact

it@m - opensource@muenchendigital.io

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/it-at-m/digiwf-form-renderer.svg?style=for-the-badge
[contributors-url]: https://github.com/it-at-m/digiwf-form-renderer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/it-at-m/digiwf-form-renderer.svg?style=for-the-badge
[forks-url]: https://github.com/it-at-m/digiwf-form-renderer/network/members
[stars-shield]: https://img.shields.io/github/stars/it-at-m/digiwf-form-renderer.svg?style=for-the-badge
[stars-url]: https://github.com/it-at-m/digiwf-form-renderer/stargazers
[issues-shield]: https://img.shields.io/github/issues/it-at-m/digiwf-form-renderer.svg?style=for-the-badge
[issues-url]: https://github.com/it-at-m/digiwf-form-renderer/issues
[license-shield]: https://img.shields.io/github/license/it-at-m/digiwf-form-renderer.svg?style=for-the-badge
[license-url]: https://github.com/it-at-m/digiwf-form-renderer/blob/master/LICENSE
[product-screenshot]: images/screenshot.png
