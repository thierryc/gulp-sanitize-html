# gulp-sanitize-html [![NPM version](https://badge.fury.io/js/gulp-sanitize-html.svg)](http://badge.fury.io/js/gulp-sanitize-html) 

> gulp plugin to sanitize HTML (partial).

*Issues with the HTML parser and output should be reported on the [sanitize-html](https://github.com/punkave/sanitize-html/issues) issue tracker.*

## Install with [npm](npmjs.org)

```sh
npm i gulp-sanitize-html --save-dev
```

## Usage

```js
var gulp = require('gulp');
var sanitizeHtml = require('gulp-sanitize-html');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(sanitizeHtml.transform({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
```

See the [sanitize-html docs](https://github.com/punkave/sanitize-html) for options.

## Run tests

Install dev dependencies:

```sh
npm i && mocha
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/thierryc/gulp-sanitize-html/issues)

## Authors

**Thierry Charbonnel**

+ [github/thierryc](https://github.com/thierryc)

## License

Copyright (c) 2016 Thierry Charbonnel  
Released under the MIT license

***
