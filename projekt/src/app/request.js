async function request(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer kj3h45bl2k34jt23498570q9n8098354t7029358tyowie5uthw8475tyq98347ty834irhfoqi34uyt18",
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();

  return json;
}

async function requestPost(url, body) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization:
        "Bearer kj3h45bl2k34jt23498570q9n8098354t7029358tyowie5uthw8475tyq98347ty834irhfoqi34uyt18",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);

  return response.ok;
}

export async function getListing() {
  const url = "http://localhost:4000/api/v1/listings";
  return await request(url);
}

export async function getListingDetails(id) {
  const url = `http://localhost:4000/api/v1/listings/${id}`;
  return await request(url);
}

export async function subscribeNewsletter(email) {
  const url = `http://localhost:4000/api/v1/newsletter`;
  const body = { email: email };

  return await requestPost(url, body);
}
