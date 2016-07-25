export default class SeriesInfoView {
  constructor (element, info) {
    this.element = element;
    this.info = info;
    console.log(info);

    this.render();
    this.listCreators();

  }

  render() {
    this.element.querySelector('.img-container__pic').src = `${this.info.data.results[0].thumbnail.path}.${this.info.data.results[0].thumbnail.extension}`
    this.element.querySelector('.spotlight-title').innerText = `${this.info.data.results[0].title}`
    this.element.querySelector('.lifespan').innerText = `${this.info.data.results[0].startYear} - ${this.info.data.results[0].endYear}`

    console.log('hello world');
  }

  listCreators() {
    this.info.data.results[0].creators.items.forEach((creator) => {
      const creatorsList = document.querySelector('.creators-list');
      const creatorName = document.createElement('li');

      creatorName.innerText = creator.name;
      creatorsList.appendChild(creatorName);
    });
  }
}
