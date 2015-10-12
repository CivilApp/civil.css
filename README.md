# civil.css

A minimal, opinionated, and content-centric CSS library designed for perfectionists by harnessing the magic of modular scale, and vertical rhythm.

[Style Guide][styleguide]


## Installation

There are two ways you can download, and use `civil.css`:

- Download it from the [project page][downloads].
- (Recommended) Install with [Bower][bower]: `bower install --save civil.css`


## Building

### Bower

To build `civil.css` from source, please ensure you have installed [Bower][bower].

1. Run `bower install` in the project directory.
2. Compile the SASS source by running:

    ```shell
    sass --load-path bower_components/bourbon/app/assets/stylesheets/ --style compressed --watch sass:dist
    ```

### Gulp

It can also be built using [Gulp][gulp] ([Bower][bower] dependencies are still required):

1. Run `npm install` to install the build dependencies.
2. Run `gulp build` to build `civil.css`.

### Configuration

See, and modify [`sass/modules/_variables.scss`][config].


## Inspiration

`civil.css` was inspired by the following toolkits / libraries / frameworks which you should definitely check out:

- [Reboot by Bootstrap](https://github.com/twbs/bootstrap/)
- [Basscss](http://www.basscss.com/)
- [Skeleton](http://getskeleton.com/)
- [Pure](http://purecss.io/)
- [TACHYONS](http://tachyons.io/)


  [styleguide]: http://civilapp.github.io/civil.css/
  [bower]: http://bower.io/
  [gulp]: http://gulpjs.com/
  [downloads]: https://github.com/CivilApp/civil.css/releases
  [config]: https://github.com/CivilApp/civil.css/blob/master/sass/modules/_variables.scss