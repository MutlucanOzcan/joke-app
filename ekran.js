class Ekran {
  constructor() {
    this.sakaGetirButton = document.querySelector(".saka-getir-button");
    this.sakaGetirButton.addEventListener(
      "click",
      /*this.sakaGetir.bind(this)*/ () => this.sakaGetir()
    );
  }
  async sakaGetir() {
    const randomResim = await new ImageApi().randomResimGetir();
    const randomSaka = await new JokeApi().randomSakaGetir();
    const tumSonuclar = {
      resim: randomResim,
      saka: randomSaka,
    };
    this.ekranaSonuclariYazdir(tumSonuclar);
  }
  ekranaSonuclariYazdir(sonuclar) {
    document.querySelector(".sonuc").innerHTML = `<div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img
          src="${sonuclar.resim}"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-danger p-2">
            ${sonuclar.saka}
          </p>
        </div>
      </div>
    </div>
  </div>`;
  }
}
