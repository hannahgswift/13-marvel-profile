export default class SeriesInfoView {
  constructor (element, data) {
    this.element = element;
    this.data = data;
    console.log(data);

  }



  render() {
    let image = this.element.querySelector('.img-container__pic');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';

    // this.element.querySelector(`.contact__name`).innerText = `${this.data.name.firstName} ${this.data.name.lastName}`;
    // this.element.querySelector(`.contact__email`).setAttribute(`href`, `mailto:${this.data.email}`);
    // this.element.querySelector(`.contact__info--phone`).innerText = this.data.phone;

    console.log('hello world');
  }
}
