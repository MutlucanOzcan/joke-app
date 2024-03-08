class ImageApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = "Client-ID tzH8082vbRGvJpaYVRmXb04ksm687bzSWE83XUIrWvA";
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: "memes",
        count: 1,
      },
    });
  }
  async randomResimGetir() {
    try {
      const imgResponse = await this.axiosNesne.get("/photos/random");
      console.log(imgResponse.data[0].urls.regular);
      return imgResponse.data[0].urls.regular;
    } catch (error) {
      //console.log(error.response);
      return "https://concern.fro.ge/1.png";
    }
  }
}
