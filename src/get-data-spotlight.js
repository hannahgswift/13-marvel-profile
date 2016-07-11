export default function (term) {
  return fetch('http://gateway.marvel.com/v1/public/series/${term}')
    .then((res) => res.json())
    .then((response) => response.games);
}
