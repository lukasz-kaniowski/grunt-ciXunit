# grunt-cixunit

> Helpers for parsing log output to Xunit format

This plugin filters noise in your test output to produce correct junit xml files to use by ci reporters.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cixunit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cixunit');
```

## The "cixunit" task

### Overview
In your project's Gruntfile, add a section named `cixunit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cixunit: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.files
Type: `Array`
Default value: `[]`

Array of log files to be parsed, i.e.

```js
options: {
    files: [
        {in: 'path/to/output/log/file', out: 'path/to/generate/junit/report.xml'}
    ]
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### 0.1.0
 - parsing log output to produce junit xml report
