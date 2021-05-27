'use strict';


let endPoint = 'https://corebiz-test.herokuapp.com/api/v1/products';
let request = new XMLHttpRequest();

let data = [];

request.open('GET', endPoint);

request.send();

request.onerror = function(e) {
    console.log('error');
}

request.onload = () => {
    let response = (request.responseText);
    console.log(response);
    return response;
}




export default {
    getData: () => {

        return data.default
    }
}