# vue-helios

> Helios base vue project.


## Notes

* default orientation is set to portrait in the manifest.json
* import fonts into the app using the font loader and following FVD guidelines found here: https://github.com/typekit/fvd and here https://github.com/typekit/webfontloader
* import statements have an alias from webpack that will transpose the @ symbols into the src directory. This remove the need for figuring out all the different relative imports, it can all be relative to src.
* Montserrat font is included as an example of how to use the font-loader, feel free to delete.
* delay-timeout
* config module
* Timeout explanation - just include the component
* EventBus explanation - link article
* reachjs webpack config info
* triple tap for admin panel
* can passphrase protext admin panel. Must set an ADMIN_PASS env var at build time. Off by default
* automatically copy README to dist folder
* automatically rename helios.config.json to helios.example.config.json
* testing setup with Karma/Mocha

## Vue resources
### Essential Links

"https://vuejs.org" - Core Docs
"https://forum.vuejs.org" - Forum
"http://chat.vuejs.org/" - Vue Community Chat
"https://twitter.com/vuejs" - Twitter
"http://vuejs-templates.github.io/webpack/" - Docs for This Template

### Ecosystem

"http://router.vuejs.org/" - vue-router
"http://vuex.vuejs.org/" - vuex
"http://vue-loader.vuejs.org/" - vue-loader
"https://github.com/vuejs/awesome-vue" - awesome-vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
