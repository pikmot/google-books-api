//grabbin key from .env file
const key = import.meta.env.VITE_API_KEY;

export const getBooksData = async (searchTerm = "", limit = 5) => {
  //   console.log(limit, searchTerm, key);

  //   const response = await fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=test&key=AIzaSyB2VW7IQos7AxJdrv0H4bey0Cl_67kZ6Pw&maxResults=4`,
  //   );

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}&maxResults=${limit}`,
  );

  //   console.log(response);

  //check failed fetch
  if (!response.ok) {
    throw new Error("failed to fetch Data");
  }

  //chech if data empty/invalid search term
  const data = await response.json();

  if (data.length === 0) {
    throw new Error(`Invalid Search Term or Missing books : ${searchTerm}`);
  }

  //   console.log(data);

  //   console.log(data["items"][0]["volumeInfo"]["authors"]);
  //   console.log(data["items"][0]["volumeInfo"]["title"]);
  //   console.log(data["items"][0]["volumeInfo"]["description"]);
  //   console.log(data["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]);

  return data;
};
