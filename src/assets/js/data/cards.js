'use strict';

// consulta api para trazer cards de produtos
export default function fetchUrl(endpoint) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("error", error));
  }
  