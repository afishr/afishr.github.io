"use strict";

var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		cssmin = require('gulp-clean-css'),
		htmlmin = require('gulp-htmlmin'),
		path = {
			source: {
				html: './**/[^_]*.html',
				script: 'script/**/[^_]*.js',
				style: 'style/**/[^_]*.css',
			},
			build: {
				html: './',
				script: 'script/',
				style: 'style/',
			},
		};

/* HTML:Minify */
gulp.task('html:min', function() {
	gulp.src(path.source.html)
		// .pipe(replace(/\.{2}\/(?!\.)/ig, ''))
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest(path.build.html))
});

/* Style:Minify */
gulp.task('style:min', function() {
	gulp.src(path.source.style)
		.pipe(cssmin())
		.pipe(gulp.dest(path.build.style));
});

/* Script:Minify */
gulp.task('script:min', function() {
	gulp.src(path.source.script)
		.pipe(uglify())
		.pipe(gulp.dest(path.build.script));
});

/* Minify */
gulp.task('min', [
	'html:min',
	'style:min',
	'script:min'
]);

/* Default */
gulp.task('default', ['min']);
