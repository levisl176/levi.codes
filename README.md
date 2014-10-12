# levi.codes

A personal website

## Development Setup

### Install Global Software

- [Install Git](http://git-scm.com/)
- [Install Node.js](http://nodejs.org/)
- [Install Ruby](https://www.ruby-lang.org/en/)
- Install SASS: `gem install sass`
- Install Compass: `gem install compass`
- Install grunt-cli globally: `npm install -g grunt-cli`
- Install bower globally: `npm install -g bower`

### Download local Software

- Clone the project repository to your local machine: `git clone https://github.com/levisl176/levi.codes`
- Download all required local packages: `npm install`

## Running the App Locally

Navigate to the project directory and run `grunt serve`.

## Understanding the Code

TODO

### File Structure

#### `src`

This directory contains all of the front-end logic. For the most part, the contents of this 
directory is organized according to the [Best Practice Recommendations for Angular App Structure]
(https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub). However, 
the file structure of this app contains many small changes from this original specification.

#### `res`

This directory contains all of the media files used within this project.

#### `dist`

This directory is not actually stored in the project repository. Instead, everything in `dist` is 
generated as part of the build process. During the build process all previous contents of `dist` 
are deleted, so remember to **never make changes directly to the contents of `dist`!**

## Acknowledgements / Technology Stack

This project uses technology from a number of third-parties. These technologies include:

- [AngularJS](https://angularjs.org/)
- [Grunt](http://gruntjs.com/)
- [SASS](http://sass-lang.com/)
- [Yeoman](http://yeoman.io/) (with generator-angular)
- [Git](http://git-scm.com/)
- Numerous other packages that are available via [NPM](http://npmjs.org/) 
  (these are listed within the `package.json` file)
- Numerous other packages that are available via [Bower](http://bower.io/) 
  (these are listed within the `bower.json` file)
