import { fetchData } from "./util";

export const Add = (x, y) => {
  return x + y;
};

export const Total = (shippingFee, subTotal) => {
  return "Php " + Add(shippingFee, subTotal);
};

export const CloneArray = (array) => {
  return [...array];
};

export const GetTitle = () => {
  console.log("calling GetTitle() in helper");
  return fetchData().then((response) => {
    const title = response.title;
    return title;
  });
};
