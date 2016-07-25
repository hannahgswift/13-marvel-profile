export default class ComicView {
  constructor(result) {
    this.result = result;

    console.log(result);

    this.element = document.createElement('li');
    this.element.classList.add('.comic-list__item');
    this.element.innerHTML = `
      <div class="img-container">
        <img class="img-container__pic" src=" alt="">
      </div>
      <span class="number"></span>
      <span class="comic-name"></span>
      <button class="button">Read More</button>`;

    this.renderImage();
    this.renderTitle();
    this.renderIssue();
  }
  renderImage() {
    const img = this.element.querySelector('.img-container__pic');
    img.src = `${this.result.thumbnail.path}.${this.result.thumbnail.extension}`;
  }

  renderTitle() {
    this.element.querySelector('.comic-name');
    this.element.innerText = this.result.title;
  }

  renderIssue() {
    this.element.querySelector('.number');
    this.element.innerText = this.result.issueNumber;
  }
}
