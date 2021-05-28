'use strict';

export default function fetchUrl(endpoint) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("error", error));
  }
  