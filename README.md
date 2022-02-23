<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" width="80" height="80">

<h3 align="center">DigiWF Form Renderer</h3>

 <!-- <p align="center">
    This is the json schema form renderer used and developed by DigiWF
    <br />
    <a href="https://git.muenchen.de/digitalisierung/digiwf-form-renderer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://git.muenchen.de/digitalisierung/digiwf-form-renderer">View Demo</a>
    ·
    <a href="https://git.muenchen.de/digitalisierung/digiwf-form-renderer/issues">Report Bug</a>
    ·
    <a href="https://git.muenchen.de/digitalisierung/digiwf-form-renderer/issues">Request Feature</a>
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


<!-- GETTING STARTED -->
## Getting Started

The following instructions give a brief example of how to use this library

### Prerequisites

To use this library you need Vue and Vuetify version 2.x.

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

See the [open issues](https://git.muenchen.de/digitalisierung/digiwf-form-renderer/issues) for a full list of proposed features (and known issues).

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
[product-screenshot]: images/screenshot.png
