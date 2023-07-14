import axios from "axios";

const BASE_URL = "https://64ab86840c6d844abedf77ee.mockapi.io/api/v1/";

const ArtworkApi = {
  getAllArtworks() {
    return axios.get(BASE_URL + "artwork");
  },
  updateArtworkInformation(id, artwork) {
    return axios.put(BASE_URL + `artwork/${id}`, JSON.stringify(artwork), {
      headers: { "content-type": "application/json" },
    });
  },
};

export default ArtworkApi;
