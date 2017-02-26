import './styles/style.scss';
import jQuery from 'jquery';
import template from './app.pug';

export default class App {
  name = 'Sample App';

  static articles = [
    {
      title: 'A Jade tutorial for begginers',
      link: 'https://www.sitepoint.com/jade-tutorial-for-beginners/'
    },
    {
      title: 'ES6 complete tutorial',
      link: 'http://qnimate.com/post-series/ecmascript-6-complete-tutorial/'
    },
    {
      title: 'Getting Real Book',
      link: 'https://gettingreal.37signals.com/'
    }
  ];


  static init() {
    const body = jQuery('body');
    const html = template({ articles: this.articles });

    body.append(html);
  }
}

global.App = App;
