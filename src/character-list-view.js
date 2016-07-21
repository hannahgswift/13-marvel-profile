export default class CharacterListView {
  constructor(element, data) {
    this.element = element.querySelector('.characters-list');
    this.data = data.results[0];
  }

  render() {
    console.log('Jeebs');
    this.element.innerHTML = ' ';

    this.data.characters.items.forEach((characters) => {
      let image = document.createElement('img');
      image.classList = 'img-container__pic';
      image.src = characters.resourceURI + '.jpg';

      let title = document.createElement('p');
      title.classList = 'character-name';

      let item = document.createElement('div');
      item.classList = 'characters-list__item';
      title.innerText = characters.name;

      this.element.appendChild(item);
      item.appendChild(image);
      item.appendChild(title);
    });
  }
}
