'use strict';
import Splide from '@splidejs/splide'

import fetchUrl from '../data/cards';

const endpoint = "https://corebiz-test.herokuapp.com/api/v1/products";

let template = `<li class="card card-{{id}} splide__slide">
                    <div class="card__offer {{offerstyle}}"><span class="card__offer__text">OFF</span></div>
                    <img src="{{imageUrl}}" alt="{{title}}" class="card__image">
                    <p class="card__title">{{title}}</p>
                    <p class="card__price {{pricestyle}}" style="">de R$ {{price}}</p>
                    <p class="card__bestprice">por R$ {{bestPrice}}</p>
                    <p class="card__installment {{installmentstyle}}">ou em {{qtd}}x de {{val}}</p>
                    <button class="card__button btn btn__negative">COMPRAR</button>
                </li>`;

export default {

    buildCards: () => {

        if ( localStorage.getItem('cartQtd') ) {
            document.querySelector('.shop__link__counter').innerHTML = localStorage.getItem('cartQtd');
        }
       
        const fetchData = async () => {
            const data = await fetchUrl(endpoint);
            let prods = document.querySelector('.splide__list');

            prods.innerHTML = '';

        
            prods.innerHTML = data.map((produto) => {
                let card = template

                return card.replace(/{{id}}/gi, produto.productId)
                            .replace(/{{offerstyle}}/gi, !produto.listPrice ? 'hidden' : 'visible')
                            .replace(/{{imageUrl}}/gi, produto.imageUrl)
                            .replace(/{{title}}/gi, produto.productName)
                            .replace(/{{pricestyle}}/gi, !produto.listPrice ? 'hidden' : 'visible')
                            .replace(/{{price}}/gi, produto.listPrice ? (produto.listPrice/100).toLocaleString('pt-br', {minimumFractionDigits: 2}) : '')
                            .replace(/{{bestPrice}}/gi, (produto.price/100).toLocaleString('pt-br', {minimumFractionDigits: 2}))
                            .replace(/{{installmentstyle}}/gi, !produto.installments[0] ? 'hidden' : 'visible')
                            .replace(/{{qtd}}/gi, produto.installments[0] ? produto.installments[0].quantity : '')
                            .replace(/{{val}}/gi, produto.installments[0] ? (produto.installments[0].value/100).toLocaleString('pt-br', {minimumFractionDigits: 2}) : '');

            });


            if (window.innerWidth < 1024) {
                new Splide( '#splide' ).mount();
             }
             else {
                new Splide( '#splide', {
                    perPage: 4,
                    rewind : true,
                } ).mount();
             }

            let $buttons = document.querySelectorAll('.card__button');
            let counter = parseInt(document.querySelector('.shop__link__counter').innerHTML, 10);
            
            $buttons.forEach($button => $button.addEventListener('click', () => {
                counter = counter + 1;
                document.querySelector('.shop__link__counter').innerHTML = counter;
                localStorage.setItem('cartQtd', counter)
            }));
        };

   
        fetchData();


    },

    addToCard: () => {
        
        let buttons = document.querySelectorAll('.card__button');
        let counter = parseInt(document.querySelector('.shop__link__counter').innerHTML, 10);
        
        buttons.forEach(button => button.addEventListener('click', () => {
            document.querySelector('.shop__link__counter').innerHTML = counter++;
        }));
    }
}
