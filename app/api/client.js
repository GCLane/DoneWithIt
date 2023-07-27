import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.20.20.53:9000/api/",
});

export default apiClient;
