'use strict';

import data from '../data/cards';
//import slider from './slider.js';


let template = 
    `<div class="item">
        <div class="cards--card">
            <div class="cards--card--plan">
                <div class="cards--card--plan--flag" style="{{flag}}">
                    {{flagText}}
                </div>
                <h3 class="cards--card--plan--gigas" data-normal="{{gigas}}" data-redes="{{gigasRedes}}">{{gigas}}</h3>
                <span class="cards--card--plan--gigas-detail">{{bonus}}</span>
                <h4 class="cards--card--plan--price" data-normal="{{price}}" data-redes="{{priceRedes}}">{{price}} </h4>
                <p class="cards--card--plan--subtitle" style="{{permanencia}}">{{permanenciaText}}</p>
                <a class="cards--card--plan--assine" target="_blank" data-link="{{link}}" data-linknormal="{{normalParam}}" data-linkredes="{{redesParam}}" href="{{linkDefault}}">Assine já</a>
            </div>
            <div class="cards--card--details">
                <div class="cards--card--details--redes">
                  <img src="./assets/img/icon-facebook@1x.png" alt="Facebook" />
                  <img src="./assets/img/icon-messenger@1x.png" alt="Facebook Messenger">
                  <img src="./assets/img/icon-twitter@1x.png" alt="Twitter">
                  <img src="./assets/img/icon-pinterest@1x.png" alt="Pinterest">
                  <img src="./assets/img/icon-tinder@1x.png" alt="Tinder">
                </div>
                <div class="cards--card--details--toggle">
                    <button class="cards--card--details--toggle--btn"></button>
                    <div class="cards--card--details--toggle--label">Adicione <b>{{gigasRedesAdicionais}}</b> {{gigasRedesAdicionaisPreco}}</div>
                </div>
                <div class="cards--card--details--apps">
                    <p class="cards--card--details--apps--title">Apps ilimitados</p>
                    {{imagesApps}}
                </div>
                <div class="cards--card--details--vantagens">
                    <h4 class="cards--card--details--vantagens--title">Ligações ilimitadas</h4>
                    <p class="cards--card--details--vantagens--desc">{{ligacoes}}</p>
                    <h4 class="cards--card--details--vantagens--title">Apps inclusos no plano</h4>
                    <p class="cards--card--details--vantagens--desc">{{appsInclusos}}</p>
                </div>
            </div>
        </div>
        <div class="cards--card--texto-legal" style="{{textoLegal}}" data-normal="{{textoLegalText}}" data-redes="{{textoLegalTextRedes}}">{{textoLegalText}}</div>
    </div>`;


export default {

    bind: () => {

    },
    buildCards: () => {

    }
}