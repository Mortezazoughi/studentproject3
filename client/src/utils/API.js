import axios from "axios";

const API = {
  searchprof: function(query) {
    return axios.get("http://localhost:8080/searchprof", {
      params: { q: query }
    });
  },
  registerforclass: function() {
    return axios.get("http://localhost:8080/registerforclass");
  },
  searchallcourses: function() {
    return axios.get("http://localhost:8080/searchallcourses");
  },
  searchtitle: function() {
    return axios.get("http://localhost:8080/searchtitle");
  },

  profsignup: function() {
    return axios.get("http://localhost:8080/profsignup");
  }
};

export default API;
