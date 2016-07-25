import ComicView from 'comic-view';

export default class ComicListView {
  constructor(element, info) {
    this.element = element;
    this.info = info;
  }

  renderComicsList() {
    this.info.data.results.forEach((comic) => {
      const newComic = new ComicView(comic);
      this.element.appendChild(newComic.element);
    });
  }
}
