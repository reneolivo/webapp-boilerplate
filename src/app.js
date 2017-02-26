import './styles/style.scss';
import $ from 'jquery';
import template from './app.pug';
import flights from './flights.js';


const html = template({ flights: flights });

$('body').html(html);
