import axios from "axios";
export default {

  getUsers: function() {
    return axios.get("/api/users");
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/delete" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/add", userData);
  },

  updateUser: function(id) {
    return axios.post("/api/users/update" + id);
  }
};