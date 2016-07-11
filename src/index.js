export default function (element) {
  return fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=8212361feee4837cb9e1a3f88a6efb82`)
    .then((res) => res.json())
    .then((response) => response.element);

  return element;
}
