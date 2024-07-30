import axios from "axios";

interface productsProps {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface getProductsProps {
  callback: (data: productsProps[]) => void;
}

export const getProducts = (callback: (data: productsProps[]) => void) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
