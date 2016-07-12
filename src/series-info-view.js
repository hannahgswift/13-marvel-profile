export default class SeriesInfoView {
  constructor (element, data) {
    this.element = element;
    this.data = data;
    console.log(data);

  }

  render() {
    let image = this.element.querySelector('.img-container__pic');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';

    console.log('hello world');
  }
}
