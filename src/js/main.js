/*require('../index.html');*/

let navs = require('../js/components/navs'),
    iconChange = require('../js/components/iconchange');

/* Insert email and phone with js for spam protection */
require('../js/components/contact')();

/* Mobile nav functionality */
navs.mobile();

/* Sticky nav functionality */
navs.sticky();

/* Reset nav to normal on resize from mobile nav */
navs.resetBigNavOnResize();

/* Color change on hover for svg profile link icons */
iconChange('codewars', 'codewars-hover');
iconChange('freecodecamp', 'freecodecamp-hover');
