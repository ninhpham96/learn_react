import axios from "../utils/axiosCustomize";

const postCreatenewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put(`api/v1/participant`, data);
};

const postDeleteUser = (id) => {
  return axios.delete(`api/v1/participant`, { data: { id: id } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email, password });
};
const postRegister = (email, username, password) => {
  return axios.post("api/v1/register", { email, username, password });
};

const getQuizByUser = (quizId) => {
  return axios.get("/api/v1/quiz-by-participant");
};

const getQuizById = (quizId) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${quizId}`);
};

export {
  getAllUsers,
  postCreatenewUser,
  putUpdateUser,
  postDeleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getQuizById,
};
