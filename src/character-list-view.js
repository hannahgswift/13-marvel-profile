import CharacterView from 'character-view';

export default class CharacterListView {
  constructor(element, info) {
    this.element = element;
    this.results = info.data.results;
  }

  renderCharList() {
    // document.querySelector('.characters-list').innerHTML = '';

    this.results.forEach((character) => {
      const newList = new CharacterView(character);
      this.element.appendChild(newList.element);
    });
  }
}
