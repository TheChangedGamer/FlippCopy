import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.11:8080",
});

export default apiClient;
// apiClient.get('/company/all').then(response => {
//     if(!response.ok) {
//         response.problem
//     }
// })
