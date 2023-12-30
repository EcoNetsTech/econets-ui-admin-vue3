# global-object

There are at least 3 different ways to reference the global object mentioned in ES6/2015

  * `window` historically on HTML pages
  * `self` in Workers, and historically on HTML pages too
  * `global` in basically all server side implementation of JavaScript

If we search in Github, the summed amount of `typeof window` or `typeof global` checks,
mostly to understand which one is available, is about 23 millions of times.

This is madness, and since there's no reason at all to prefer anything different from `global`
for an object defined indeed as the global object in the global scope, I've decided to create
this page in order to put an end to all this.

- - - -

Forget about `window` and `self` in Workers, normalize your work-flow once for all
and with or without browserify in place!


### As first script in your page
This is the most straight forward way to have it defined everywhere as such
```html
<script>var global=global||this;</script>
```
No need to disturb the network, no need to ever update the script even if a browser
will eventually expose `global` reference. It goes there to stay.


### As first script in your Worker
Same goes with Web Workers and others, the code is exactly the same, without the node:
```html
var global=global||this;
```
Forget about `self` or `typeof window` checks, we've got `global`!


### As anything else
ES6, node itself, whatever ... 
```js
// ES6
import global from 'global-object';

// npm require
var global = require('global-object');

// browser
script.src = 'global-object.js';
```
Just use [global-object](global-object.js)


### Strict compatible!
Yes, the `this` reference in the global scope is always the global object.
In HTML pages like in workers, it will work everywhere even after `"use strict"` directive!


### Content Security Policy Compatible
Using this meta will solve all problems:
```html
<meta http-equiv="Content-Security-Policy" content="script-src 'unsafe-inline' 'self' 'sha1-WWQNP0ydesPxK1yAm94nH5bQoIo=' 'sha256-5rMu52Es8MMWNrCqRkunbIAeVDz8iJ63wD0rPm57xi4='">
```
Great, no network request required, and `global` available under CSP too!


### License
Nope, nothing ... do what you want, literally!