"use strict";
const os = require('os');
const browser = os.platform() === 'linux' ? 'google-chrome' : (os.platform() === 'darwin' ? 'google chrome' : (os.platform() === 'win32' ? 'chrome': 'firefox' ));

module.exports = {
    port: 8000,
    browser: browser,
    paths: {
        src: "./src",
        build: "./build",
        html: "./src/**/*.html",
        mainHtml: "./src/index.html",
        templateSass:"./src/templates/**/*.scss",
        sass:"./src/stylesheets/**.scss",
        js: './src/js/**.js',
        img: './src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    browserSync: {
        proxy: 'http://localhost:8000/index.html',
        files: ['build/**/*.*'],
        browser: browser,
        port: 8001
    }
};
