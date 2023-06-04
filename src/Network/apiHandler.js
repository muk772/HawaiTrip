export const baseurl = "http://localhost:3000/api";

var http = function (path, method, content, headers = null) {
  const fetchStartTime = Date.now();
  var url = baseurl + path;
  method.headers = {
    Accept: "/",
  };

  if (content) {
    method.headers["content-type"] = content;
  }

  if (headers) {
    method.headers = {
      ...method.headers,
      ...headers,
    };
  }
  return new Promise((resolve, reject) => {
    fetch(url, method)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((text) => {
          throw new Error(text.error.error);
        });
      })
      .then((response) => {
        resolve(response);
      })
      .catch(function (e) {
        console.log("Request to " + path + " failed: ", e);
        reject({ error: e });
      });
  });
};

const apiHandler = {
  get: function (path, params) {
    return http(`${path}${params}`, { method: "GET" }, "application/json");
  },
};

export default apiHandler;
