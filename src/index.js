import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import CharacterView from 'character-view';

export default function (element) {

  fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=8212361feee4837cb9e1a3f88a6efb82')
    .then((res) => res.json())
    .then((data) => {
      const x = new SeriesInfoView(element, data);
      x.render();
    });

  fetch(`https://gateway.marvel.com:443/v1/public/series/9856/characters?apikey=8212361feee4837cb9e1a3f88a6efb82`)
    .then((res) => res.json())
    .then((data) => {

      //  console.log(data);

      const y = new CharacterListView(element, data);
      y.renderCharList();
    });

}
