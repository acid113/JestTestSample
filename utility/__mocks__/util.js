export const fetchData = () => {
  console.log("Fetching mocked data...");

  return Promise.resolve({
    userId: 1,
    id: 1,
    title: "delectus aut autem 1",
    completed: false,
  });
};
