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
import news from './components/news.js';


if (document.body.classList.contains('home-page')) {

  /**
   * cards
   */
  cards.buildCards();
 
  /**
   * news
   */ 
  news.isValid();
  news.addNewEmail();

}
