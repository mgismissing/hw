const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

console.log(urlParams.get('u'));
console.log(urlParams.get('p'));
console.log(urlParams.get('id'));