'use strict';
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

import fetchUrl from '../data/cards';

const endpoint = "https://corebiz-test.herokuapp.com/api/v1/products";

let template = `<div class="card card-{{id}}">
                    <div class="card__offer {{offerstyle}}"><span class="card__offer__text">OFF</span></div>
                    <img src="{{imageUrl}}" alt="{{title}}" class="card__image">
                    <p class="card__title">{{title}}</p>
                    <p class="card__price {{pricestyle}}" style="">de R$ {{price}}</p>
                    <p class="card__bestprice">por R$ {{bestPrice}}</p>
                    <p class="card__installment {{installmentstyle}}">ou em {{qtd}}x de {{val}}</p>
                    <button class="card__button btn btn__negative">COMPRAR</button>
                </div>`;

export default {

    buildCards: () => {
       
        const fetchData = async () => {
            const data = await fetchUrl(endpoint);
            let $prods = document.querySelector('#products__carousel');

            $prods.innerHTML = '';

        
            $prods.innerHTML = data.map((produto) => {
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
        };

        fetchData();

        tns({
            container: '#products__carousel',
            items: 4,
            center: true,
            loop: true,
            prevButton: true,
            nextButton: true,
            navPosition: 'bottom',
            autoplay: false,
            speed: 600,
            controls: true,
            arrowKeys: true,
            controlsText: ['<', '>']
        });
    
    }
}
