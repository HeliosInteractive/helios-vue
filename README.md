# vue-helios

A Helioscentric Vue on the Universe.

This project is a base Vue app that is intended to be forked or cloned and then built upon. It contains many pre-built features that are common in Helios web-apps.

---
## Features

### Granular Font Loading

Loading of Fonts is handled by using [webfontloader](https://github.com/typekit/webfontloader). This allows for you to wait until all of your fonts are loaded before diving into that app, it also allows you to include only the fonts that you need instead of making dozens of requests for fonts that were given by design, but not actually used in development.

By default the app will not render to page until all required fonts are loaded. This can be changed within the `App.vue`.

Requiring new fonts should be done within the `components/helios/FontLoader.vue` component. You will need to add them following the documentation on [webfontloader](https://github.com/typekit/webfontloader) and preferably using [fvd notation](https://github.com/typekit/fvd) for consistency.

Montserrat font is included as an example of how to use the font-loader, it can safely be deleted if you don't need it.

### Installation as a home screen app on Android/iOS

This app declares a manifest file which should prompt devices to add the app as home screen launchable site. It will launch with a helios branded launcher screen before the app loads.

The manifest declare default screen orientation as portrait. Change to landscape if you want the launching screen to display as landscape before the app loads.

### Service Workers

This app includes a basic service worker that will cache the main js/css files that are generated during the build process. For more information on this please refer to the vue-cli template that initially implements it [here](https://github.com/vuejs-templates/pwa).

### Timeout

This app includes a basic timeout component that can be added to any other component for use.  It uses a forked version of the [away](https://github.com/adammcfadden/away) package which detects user interactions. You can go to `http://localhost:8080/#/sample-timeout` to see an example of how this timeout component can be used.

There is also a small module in util called `delay-timeout`. This module allows you to send an event that is treated by the timeout component as interaction. This will allow you to prevent a timeout popping up at inopportune times such as during a long async call.

### Helios Config Management

This app takes care of how we typically manage the `helios.config.json` file. It will delay loading of the app until the `helios.config.json` is loaded. This can be changed in the `App.vue` if it is not desireable. The app also caches the json into localStorage for faster and promise free access to it once it's loaded. It will overwrite localStorage if the page is refreshed.

Accessing the config file should be done through the config util found at `util/config`. You will likely only need one method from this which is `getItem(key)`. This method accepts a key (using dot notation for nested properties) and will return the value from the config. Example: `getItem('reach.url')  // returns 'https://reachurlfromconfig.com/api/'`

There is also a postbuild step that will automatically rename your helios.config.json to helios.example.config.json. This postbuild step looks at the `CONFIG_ENV` environment variable to determine which section of the config to copy over. It default to production if this environment variable is not set.

### Admin Panel

The app has a simple admin panel that is available for viewing at `http://localhost:8080/#/admin`. It will show the current version of the app (must setup jenkins to add this), the NODE_ENV that was set at the time of build, and the helios.config.json.

If desired, you can password protect the admin panel (this isn't really that secure, just a small barrier if we want it), by default this is off. To do this, update the AdminPanel component to have `requirePassphrase` set to `true`. In addition you will need to provide a password when building the app by setting the `ADMIN_PASS` environment variable to your desired password. Password protection will only hide the helios.config.json as the other parts should not have any sensitive information.

You can also access the admin panel from anywhere in the app by triple tapping in the top left corner.

### On Screen Keyboard (Okey)

The app implements a Keyboard component which can be included within any other component in order to add a keyboard to it. The keyboard included in this app is customized in both functionality and styling. It comes with a wide range of characters, and the ability to toggle upper/lower case. It is styled so that it will scale with the size of the window. All of the styling for the keyboard is written in the style block on the component. If you wish to style on your own, you can either use the current styling and customize, or include the original okey.css if you wish. The keyboard component will search for new input fields to bind to on mount and update. If you change input fields out without changing the keyboard, then be sure to trigger a `$forceUpdate` on the keyboard to have it see the new inputs.

### Readme Copy

The readme will be automatically copied to the build folder.

### ESlint Formatting

ESlint is setup to lint for airbnb ES6 rules. It will also automatically format your files if you have the dev server running. You can edit this in the `webpack.base.conf.js` if you do not want it automatically correcting code for you.

---

## Jenkins

Setting up this project for Jenkins should be pretty quick if you copy or follow the example project found [here](http://jenkins.heliosinteractive.com:8192/job/Examples/job/Web/job/helios-vue/).

---

## Development Notes

### Build setup
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

### Webpack Alias
Import statements have an alias from webpack that will transpose the `@` symbol into the src directory. This remove the need for figuring out all the different relative imports, it can all be relative to src. So if you want to import `/components/helios/TripleTap.vue` you can just write `import TripleTap from '@/components/helios/TripleTap'` regardless of where you are in the project.


---

## Vue resources
### Essential Links

* "https://vuejs.org" - Core Docs
* "https://forum.vuejs.org" - Forum
* "http://chat.vuejs.org/" - Vue Community Chat
* "https://twitter.com/vuejs" - Twitter
* "http://vuejs-templates.github.io/webpack/" - Docs for This Template

### Ecosystem

* "http://router.vuejs.org/" - vue-router
* "http://vuex.vuejs.org/" - vuex
* "http://vue-loader.vuejs.org/" - vue-loader
* "https://github.com/vuejs/awesome-vue" - awesome-vue


---

## Todo

* EventBus explanation - link article
* reachjs webpack config info
* testing setup with Karma/Mocha
