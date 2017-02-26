import './styles/style.scss';
import jQuery from 'jquery';
import template from './app.pug';
import articles from './articles';

export default class App {
  name = 'Sample App';

  static init() {
    const body = jQuery('body');
    const html = template({ articles: articles });

    body.append(html);
  }
}

global.App = App;
