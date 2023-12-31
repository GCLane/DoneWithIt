import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://10.20.30.24:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  //Before
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
  //After
};
export default apiClient;
