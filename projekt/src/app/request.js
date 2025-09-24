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

export async function getListing() {
  const url = "http://localhost:4000/api/v1/listings";
  return await request(url);
}

// export async function getPopular() {
//   const url =
//     'https://api.themoviedb.org/3/movie/popular?language=en-US';
//     return await request(url);
// }

// export async function getMovieDetails(movieId) {
//   const url =
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
//     return await request(url);
// }
