import axios from "axios";

export const getAlphaItems = () => {
  return axios
    .get("http://localhost:4000/api/v1/alphaItems/")
    .then((response) => response.data);
};

export const addAlphaItem =(item: any) => {
  return axios
    .post("http://localhost:4000/api/v1/alphaItems/", item)
    .then((response) => response.data);
}