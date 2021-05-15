import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movie");
  }

  get(id) {
    return http.get(`/movie/${id}`);
  }
}

export default new MovieDataService();