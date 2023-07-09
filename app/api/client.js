import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.19:19001/api/",
});

export default apiClient;
