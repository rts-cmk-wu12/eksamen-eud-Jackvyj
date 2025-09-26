async function request(url, token = null) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();

  return json;
}

async function requestPost(url, body, token = null) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);

  return response;
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

  return await requestPost(url, body).ok;
}

export async function createToken(email, password) {
  const url = `http://localhost:4000/auth/token`;
  const body = { email: email, password: password };

  const request = await requestPost(url, body);

  if (request.ok) {
    return await request.json();
  }
  return request.ok;
}

export async function createUser(email, password, firstname, lastname) {
  const url = `http://localhost:4000/api/v1/users
`;
  const body = {
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  };

  const request = await requestPost(url, body);

  if (request.ok) {
    return await request.json();
  }
  return request.ok;
}
