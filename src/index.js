import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import CharacterView from 'character-view';
import ComicListView from 'comic-list-view';
import ComicView from 'comic-view';

export default function (element) {
  fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=8212361feee4837cb9e1a3f88a6efb82')
    .then((res) => res.json())
    .then((data) => {
      const a = new SeriesInfoView(element, data);
      a.render();
    });

  fetch('https://gateway.marvel.com:443/v1/public/series/9856/characters?apikey=8212361feee4837cb9e1a3f88a6efb82')
    .then((res) => res.json())
    .then((data) => {
      const b = new CharacterListView(document.querySelector('.characters-list'), data);
      b.renderCharList();
    });

  fetch('https://gateway.marvel.com:443/v1/public/series/9856/comics?apikey=8212361feee4837cb9e1a3f88a6efb82')
    .then((res) => res.json())
    .then((data) => {
      const c = new ComicListView(document.querySelector('.comics-list'), data);
      c.renderComicsList();
    });
}
