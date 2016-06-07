var gulp = require('gulp');
var sanitizeHtml = require('../');

gulp.task('default', function(){
  return gulp.src('./index.html')
  .pipe(sanitizeHtml.transform())
  .pipe(gulp.dest('./build'));
});


gulp.task('list', function(){
  var options = {
    allowedTags: ['html', 'head', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b', 'i', 'em', 'strong', 'a' ],
    allowedAttributes: {
      'a': [ 'href' ],
      'html': ['lang']
    }
  };
  return gulp.src('./index.html')
  .pipe(sanitizeHtml.transform(options))
  .pipe(gulp.dest('./build'));
});

gulp.task('concat', function(){
  var options = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  };
  return gulp.src('./index.html')
  .pipe(sanitizeHtml.transform(options))
  .pipe(gulp.dest('./build'));
});

