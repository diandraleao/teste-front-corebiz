'use strict';

export default {

    isValid: () => {
        let button = document.querySelector('.news__send__btn');
        let isValid = true;

        // regex de email generico mais aceitada
        var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        const name = document.querySelector('#name')
        const email = document.querySelector('#email')

        // valida o campo de nome, adiciona label de erro
        name.addEventListener('blur', () => {
            if ( name.value.length < 2 ) {
                isValid = false;
                name.classList.add("error")
                let el = document.createElement("span")
                el.classList.add("label-error")
                el.innerHTML = "Preencha com seu nome completo";
                name.parentNode.insertBefore(el, name.nextSibling)
            }
            else {
                isValid = true;
                name.classList.remove("error")
            }
        })

        // valida o campo de email, adiciona label de erro
        email.addEventListener('blur', () => {
            if ( !parse_email.test(email.value) ) {
                isValid = false;
                email.classList.add("error")
                let el = document.createElement("span")
                el.classList.add("label-error")
                el.innerHTML = "Preencha com um e-mail válido";
                email.parentNode.insertBefore(el, email.nextSibling)
            }
            else {
                isValid = true;
                email.classList.remove("error")
            }
        })

        button.addEventListener('click', e => {
            e.preventDefault();

            if ( isValid ) {

                let _data = {
                    "email": email.value,
                    "name": name.value
                }
                
                fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
                    method: "POST",
                    body: JSON.stringify(_data),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => response) 
                .then(function(response) { 
                    if ( response.status == 200) {
                        let newsSend = document.querySelector('.news__send');
                        newsSend.classList.remove("d-block")
                        newsSend.classList.add("d-none")
                        let newsSent = document.querySelector('.news__sent');
                        newsSent.classList.remove("d-none")
                        newsSent.classList.add("d-block")
                        name.value = ''
                        email.value = ''
                    }
                })
                .catch(err => console.log(err));

            }
        })
    },

    addNewEmail: () => {
        
        let button = document.querySelector('.news__sent__btn');

        button.addEventListener('click', () => {
            
            let newsSent = document.querySelector('.news__sent');
            newsSent.classList.remove("d-block")
            newsSent.classList.add("d-none")

            let newsSend = document.querySelector('.news__send');
            newsSend.classList.remove("d-none")
            newsSend.classList.add("d-block")

        })

    }
}