// Reguires via exports-loader
// require('exports-loader?!gsap');
// require('exports-loader?!./vendors/jquery.gsap.min');
// require('exports-loader?!slick-carousel');

// Imports via webpack aliases
// import 'animation.gsap';
// import 'debug.addIndicators';

// Import js for pages
import HomePage from './pages/home-page/home-page';

// Include router
import Router from './vendors/router';

// Include components
import Loading from './helpers/loading-helper';

// Create new router
const router = new Router();
// Define all theme routes
const themeRoutes = {
  // Common scripts for all pages
  common: {
    init: () => {
      // Initialize page loading
      Loading.init();
    },
    finalize: () => {
      Loading.hide();
    },
  },

  // Scripts to be initialized on the home page
  homePage: {
    init: () => {
      HomePage.init();
    },
  },
};

// Init router
router.setRoutes(themeRoutes);

// Apply router
$(document).ready(() => {
  // Load all router events
  router.loadEvents();
});
