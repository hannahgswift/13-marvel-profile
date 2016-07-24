export default class CharacterView {
  constructor(info) {
    this.results = info;

    this.element = document.createElement('li');
    this.element.classList.add('.characters-list__item');
    this.element.innerHTML = `
      <div class="img-container">
        <img class="img-container__pic" src="" alt="">
      </div>
      <span class="number"></span>
      <span class="character-name"></span>`;

    this.renderImg();
    this.renderTitle();
  }

  renderImg() {
    this.element.querySelector('img-container__pic');
    this.element.src = this.results.thumbnail.path + '.jpg';
  }

  renderTitle() {
    this.element.querySelector('.character-name');
    this.element.innerText = this.results.name;
  }

}
