import axios from "axios";
export default {

  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  signupUser: function(body) {
    return axios.post("/auth/signup", body);
  },

  updateLikes: function(userID, postID) {
    console.log("is updatelikes working")
    return axios.put(`/api/users/updateLikes/${userID}/${postID}`);
  },

  loginUser: function(body) {
    return axios.post("/auth/login", body);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/delete" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/add", userData);
  },

  updateUser: function(id, data) {
    return axios.put("/api/users/update/" + id, data);
  },

  // checkUser: function(email, password) {
  //   return axios.get("/api/users/")
  // }
};