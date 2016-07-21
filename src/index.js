import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';

export default function(element) {
  console.log(element);


  fetch(`http://gateway.marvel.com:80/v1/public/series/9856?apikey=8212361feee4837cb9e1a3f88a6efb82`)
    .then((res) => res.json())
    .then((data) => {

      //  console.log(data);

      let x = new SeriesInfoView(element, data);
      x.render();
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/9856?apikey=8212361feee4837cb9e1a3f88a6efb82`)
    .then((res) => res.json())
    .then((data) => {

      //  console.log(data);

      let y = new CharacterListView(element, data);
      y.render();
    });

}
