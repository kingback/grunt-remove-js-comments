# grunt-remove-js-comments

> Remove js comments without uglify the code

## Getting Started

This plugin requires Grunt `>=0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-remove-js-comments --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-remove-js-comments');
```

## The "remove_js_comments" task

### Overview

In your project's Gruntfile, add a section named `remove_js_comments` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  remove_js_comments: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

```js
grunt.initConfig({
  remove_js_comments: {
    files: {
      cwd: 'src',
      dest: 'build',
      expand: true,
      src: ['**/*.js']
    },
  },
});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 2018-11-28   v0.1.0   Finish first version.
