import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/StudentDatas");
  }
  create(data) {
    return http.post("/StudentDatas", data);
  }
}
export default new TutorialDataService();