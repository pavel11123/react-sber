const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProductList() {
    return fetch(`${this._baseUrl}/products`, {
      headers: this._headers,
    }).then(onResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(onResponse);
  }

  getProductId(idProduct) {
    return fetch(`${this._baseUrl}/products/${idProduct}`, {
      headers: this._headers,
    }).then(onResponse);
  }

  setUserInfo(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(dataUser),
    }).then(onResponse);
  }

  search(searcheQuery) {
    return fetch(`${this._baseUrl}/products/search?query=${searcheQuery}`, {
      headers: this._headers,
    }).then(onResponse);
  }

  changeLikeProduct(productId, isLike) {
    // console.log(isLike);
    return fetch(`${this._baseUrl}/products/likes/${productId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(onResponse);
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzOGMwNzNhYTI4NTAzNGY3OGFkMWEiLCJncm91cCI6ImZyb250MTAiLCJpYXQiOjE2NzY5MDU1MzAsImV4cCI6MTcwODQ0MTUzMH0.SGKlk2GdS-kxhz7coLlydAfSFhyiRLubhYHrCpq3GJE",
  },
};

const api = new Api(config);

export default api;
