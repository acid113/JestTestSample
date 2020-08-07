import axios from "axios";

export const fetchData = () => {
  console.log("Fetching real data...");

  const url = "https://jsonplaceholder.typicode.com/todos/1";

  return axios.get(url).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
