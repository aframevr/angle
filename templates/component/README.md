## {{ npmName }}

[![Version](http://img.shields.io/npm/v/{{ npmName }}.svg?style=flat-square)](https://npmjs.org/package/{{ npmName }})
[![License](http://img.shields.io/npm/l/{{ npmName }}.svg?style=flat-square)](https://npmjs.org/package/{{ npmName }})

{{ description }}

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |


### Develop

```
npm i -g gh browserify budo webpack # install necessary global package
npm i                               # install local devDependencies
npm run dev                         # start dev-server port 8000
npm run mkrepo                      # create new github repo for component if not exist, `npm i -g gh` is necessary
npm run gh                          # push changes, you should replace remote origin if different
npm run mknpm                       # publish as npm package
```

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/{{ aframeVersion }}/aframe.min.js"></script>
  <script src="https://unpkg.com/{{ npmName }}/dist/{{ npmName }}.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity {{ shortName }}="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install {{ npmName }}
```
-->

#### npm

Install via npm:

```bash
npm install {{ npmName }}
```

Then require and use.

```js
require('aframe');
require('{{ npmName }}');
```
