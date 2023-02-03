import axios from "axios";

export const getCards = () => {
  return axios
    .get("http://localhost:4000/api/v1/cards/")
    .then((response) => response.data);
};
