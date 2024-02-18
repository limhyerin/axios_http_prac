import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 인터셉터 추가
api.interceptors.request.use((request) => {
  console.log("요청합니다.");
  return request;
});

// 응답 인터셉터 추가
api.interceptors.response.use((response) => {
  console.log("응답합니다.");
  return response;
});

export default api;
