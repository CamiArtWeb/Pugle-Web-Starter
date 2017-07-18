# Pugle Web Starter

[![Build Status](https://travis-ci.org/MathiasSM/Pugle-Web-Starter.svg?branch=master)](https://travis-ci.org/MathiasSM/Pugle-Web-Starter)

## Overview

**Pugle Web Starter** is an opinionated boilerplate for web development. It includes tools for responsive design and performance-oriented development. It tries to follow best practices outlined in Google's [Web Fundamentals](https://developers.google.com/web/fundamentals/) and to be documented enough so that everyone, regardless of their current training with used tools, could use it (and perhaps learn with it).  

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pug templates                          | Build your HTML files with ease using [Pug](http://pugjs.org/), with access to global info through the [app/siteinfo.js](app/siteinfo.js) file (as `siteinfo`) and specific page info through a `index.json` file (for a `index.pug` sibling file) (as `page`) within the Pug template.|
| Sitemap Generation                     | Sitemap generation for html files, prefering extension-less urls, using the date of last modification in a commit of a pug file as last modification date for the generated html file. Be sure to commit on each file significant changes!
| Sass support with autoprefixing        | Compile [Sass](http://sass-lang.com/) into CSS with ease, bringing support for variables, mixins and more. Process into CSS and autoprefix the rules.|
| Text-files optimization                | Minify and concatenate JavaScript, CSS and HTML files. Serve unprocessed files by placing them in the [app/root](app/root) directory (to be copied "as it" into `dist`.|
| Image optimization                     | Support for PNG, WEBP, JPG, GIF and SVG formats.|
| Responsive images                      | Generate different sizes and _webp_ versions of images to provide responsiveness. Follows [app/config/responsive.config.js](app/config/responsive.config.js) configuration file.|
| Mobile meta tags for favicons          | Generation (and injection) of mobile meta tags for icons, favicons, tile icons, manifest files, etc. Follows [app/config/favicon.config.js](app/config/favicon.config.js) configuration file.|
| Open graph and Twitter tags            | "Hardcoded" template in Pug [base file](app/templates/base.pug). Fill in each page's json companion with corresponding info to fill them correctly.|
| Google analytics                       | Just modify 'UA-XXXXX-X' in [app/templates/google-analytics.js](the snippet) for your own code (provided by Google) and it'll be injected into every HTML (thanks to pug base file).|
| Code Linting                           | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Web Starter Kit uses ESLint with [eslint-config-google](https://github.com/google/eslint-config-google), which tries to follow the Google JavaScript style guide.|
| ES2015 (ES6) via Babel 6.0             | ES2015 support using [Babel](https://babeljs.io/). To disable ES2015 support add the  `"only": "gulpfile.babel.js",` option in the [package.json](package.json) file (Babel's section). ES2015 source code will be automatically transpiled to ES5 for wide browser support.  |
| Sourcemaps for JS and CSS              | For easier debugging, sourcemaps pointing to the original lines in pre-processed CSS and JS files are generated.|
| Built-in HTTP Server                   | A built-in server for previewing your site locally while you develop and iterate                                                                                                                                                                            |
| Cross-device Synchronization           | Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by [BrowserSync](http://browsersync.io).                       |
| Live Browser Reloading                 | Reload the browser in real-time anytime an edit is made without the need for an extension. (Run `gulp serve` and edit your files)                                                                                                                           |
| Offline support (Service Worker ready) | Thanks to Google's newly baked [Service Worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers)'s tool [Workbox](https://developers.google.com/web/tools/workbox/), sites deploying `dist` to a HTTPS domain will enjoy offline support.|
| PageSpeed Insights                     | Web performance metrics showing how well your site performs on mobile and desktop (Run `gulp pagespeed`)                                                                                                                                                    |

## Quickstart

[Download](https://github.com/MathiasSM/puggle-web-starter/releases/latest) the kit or clone this repository and build on what is included in the `app` directory.

Be sure to check all files and read through the comments to understand a bit the building process.

## Web Performance

Pugle Web Starter is based upon Google's outdated _Web Starter Kit_, which "strives to give you a high performance starting point out of the box. [Their] median Web Page Test [scores](http://www.webpagetest.org/result/151201_VW_XYC/) for the default template have a [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) of ~1100 (1000 is ideal) and a repeat-visit Speed Index of ~550 thanks to Service Worker precaching." As this kit uses improved Service Worker tools, minifiers and image compressors, we're confident in that it reaches at least the stated speed. We're yet to check on that and post our own tests, though.

## Browser Support

Regarding CSS and JS support, we aim to support ät least the last two versions of the following browsers, including their respective iOS and Android versions.

* Chrome
* Firefox
* Safari
* Opera
* Edge
* Internet Explorer 9+

The kit can be used for developing for older browsers, but it might need some customization (or careful planning) to make it work seemlessly.

## Troubleshooting

If you find yourself running into issues during installation or running the tools, please open an [issue](https://github.com/MathiasSM/pugle-web-starter/issues). We would be happy to discuss how they can be solved.

<!--- ## Docs and Recipes

* [File Appendix](https://github.com/google/web-starter-kit/blob/master/docs/file-appendix.md) - What do the different files here do?
* [Using Material Design Lite's Sass](https://github.com/google/web-starter-kit/blob/master/docs/mdl-sass.md) - how to get MDL's Sass working with WSK
* [Deployment guides](https://github.com/google/web-starter-kit/blob/master/docs/deploy.md) - available for Firebase, Google App Engine and other services.
* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project. --->

## Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions to Pugle Web Starter, please see our [Contribution guide](CONTRIBUTING.md) before submitting a pull request. 

## License

Apache 2.0
# [Pugle Web Starter](https://github.com/MathiasSM/Pugle-Web-Starter/releases/latest)

[![Build Status](https://travis-ci.org/MathiasSM/Pugle-Web-Starter.svg?branch=master)](https://travis-ci.org/MathiasSM/Pugle-Web-Starter)

## Overview

[Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) is an opinionated boilerplate for web development. Tools for building a great experience across many devices and [performance oriented](#web-performance). Helping you to stay productive following the best practices outlined in Google's [Web Fundamentals](https://developers.google.com/web/fundamentals/). A solid starting point for both professionals and newcomers to the industry.

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Responsive boilerplate | A responsive boilerplate optimized for the multi-screen web. Powered by [Material Design Lite](http://getmdl.io).  You're free to use either this or a completely clean-slate  via [basic.html](https://github.com/google/web-starter-kit/blob/master/app/basic.html).                          |
| Sass support                           | Compile [Sass](http://sass-lang.com/) into CSS with ease, bringing support for variables, mixins and more. (Run `gulp serve` or `gulp` for production)                                                                                                      |
| Performance optimization               | Minify and concatenate JavaScript, CSS, HTML and images to help keep your pages lean. (Run `gulp` to create an optimised version of your project to `/dist`)                                                                                                |
| Code Linting               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. Web Starter Kit uses ESLint with [eslint-config-google](https://github.com/google/eslint-config-google), which tries to follow the Google JavaScript style guide.                                                                                                |
| ES2015 via Babel 6.0                   | Optional ES2015 support using [Babel](https://babeljs.io/). To enable ES2015 support remove the line `"only": "gulpfile.babel.js",` in the [.babelrc](.babelrc) file. ES2015 source code will be automatically transpiled to ES5 for wide browser support.  |
| Built-in HTTP Server                   | A built-in server for previewing your site locally while you develop and iterate                                                                                                                                                                            |
| Live Browser Reloading                 | Reload the browser in real-time anytime an edit is made without the need for an extension. (Run `gulp serve` and edit your files)                                                                                                                           |
| Cross-device Synchronization           | Synchronize clicks, scrolls, forms and live-reload across multiple devices as you edit your project. Powered by [BrowserSync](http://browsersync.io). (Run `gulp serve` and open up the IP provided on other devices on your network)                       |
| Offline support                     | Thanks to our baked in [Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) [pre-caching](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js#L226), sites deploying `dist` to a HTTPS domain will enjoy offline support. This is made possible by [sw-precache](https://github.com/GoogleChrome/sw-precache/).                                                                                                                                              |
| PageSpeed Insights                     | Web performance metrics showing how well your site performs on mobile and desktop (Run `gulp pagespeed`)                                                                                                                                                    |

## Quickstart

[Download](https://github.com/google/web-starter-kit/releases/latest) the kit or clone this repository and build on what is included in the `app` directory.

There are two HTML starting points, from which you can choose:

- `index.html` - the default starting point, containing Material Design layout.
- `basic.html` - no layout, but still includes our minimal mobile best-practices

Be sure to look over the [installation docs](docs/install.md) to verify your environment is prepared to run WSK.
Once you have verified that your system can run WSK, check out the [commands](docs/commands.md) available to get started.

## Web Performance

Web Starter Kit strives to give you a high performance starting point out of the box. Our median Web Page Test [scores](http://www.webpagetest.org/result/151201_VW_XYC/) for the default template have a [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) of ~1100 (1000 is ideal) and a repeat-visit Speed Index of ~550 thanks to Service Worker precaching.

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

* Chrome
* Edge
* Firefox
* Safari
* Opera
* Internet Explorer 9+

This is not to say that Web Starter Kit cannot be used in browsers older than those reflected, but merely that our focus will be on ensuring our layouts work great in the above.

## Troubleshooting

If you find yourself running into issues during installation or running the tools, please check our [Troubleshooting](https://github.com/google/web-starter-kit/wiki/Troubleshooting) guide and then open an [issue](https://github.com/google/web-starter-kit/issues). We would be happy to discuss how they can be solved.

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.babel.js` and `.travis.yml`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Docs and Recipes

* [File Appendix](https://github.com/google/web-starter-kit/blob/master/docs/file-appendix.md) - What do the different files here do?
* [Using Material Design Lite's Sass](https://github.com/google/web-starter-kit/blob/master/docs/mdl-sass.md) - how to get MDL's Sass working with WSK
* [Deployment guides](https://github.com/google/web-starter-kit/blob/master/docs/deploy.md) - available for Firebase, Google App Engine and other services.
* [Gulp recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes) - the official Gulp recipes directory includes a comprehensive list of guides for different workflows you can add to your project.

## Inspiration

Web Starter Kit is inspired by [Mobile HTML5 Boilerplate](https://html5boilerplate.com/mobile/) and Yeoman's [generator-gulp-webapp](https://github.com/yeoman/generator-webapp), having taken input from contributors to both projects during development. Our [FAQs](https://github.com/google/web-starter-kit/wiki/FAQ) attempt to answer commonly asked questions about the project.

## Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions to Web Starter Kit, please see our [Contribution guide](CONTRIBUTING.md) before submitting a pull request. [Website](https://developers.google.com/web/tools/starter-kit/) related issues should be filed on the [Web Fundamentals](https://github.com/google/WebFundamentals/issues/new) issue tracker.

## License

Apache 2.0  
Copyright 2015 Google Inc
