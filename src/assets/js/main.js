'use strict';

/**
 * import css/sass
 */

import css from '../css/reset.css';
import scss from '../css/main.scss';

/**
 * Components
 */
import cards from './components/cards.js';
import slider from './components/slider.js';


if (document.body.classList.contains('home-page')) {

  /**
   * cards
   */
  cards.buildCards();

  /**
   * slider
   */
  slider.buildSliderMaisVendidos();
  

}
