'use strict'

var CSS_FILE_EXT = '.css';
var CSS_FILE_EXT_MATCH = /\.css$/;

var SCSS_FILE_EXT = '.scss';
var SCSS_FILE_EXT_MATCH = /\.scss$/;

var HTML_FILE_EXT = '.html';
var HTML_FILE_EXT_MATCH = /\.html$/;

var TEMPLATE_FILE_EXT = '.html.js';
var TEMPLATE_FILE_EXT_MATCH = /\.html\.js$/;

var fileMatches = {
  css: {
    ext: CSS_FILE_EXT,
    match: CSS_FILE_EXT_MATCH
  },
  scss: {
    ext: SCSS_FILE_EXT,
    match: SCSS_FILE_EXT_MATCH
  },
  html: {
    ext: HTML_FILE_EXT,
    match: HTML_FILE_EXT_MATCH
  },
  template: {
    ext: TEMPLATE_FILE_EXT,
    match: TEMPLATE_FILE_EXT_MATCH
  }
};

module.exports = fileMatches;
