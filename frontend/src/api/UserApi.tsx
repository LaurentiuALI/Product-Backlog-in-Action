import axios from "axios";
const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";

export const createUser = async ({
  projectName,
  password,
}: {
  projectName: string;
  password: string;
}) => {
  const response = await axios.post(
    `${BaseURL}/api/v1/user/register`,
    {
      projectName,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const loginUser = async ({
  projectName,
  password,
}: {
  projectName: string;
  password: string;
}) => {
  const response = await axios.post(
    `${BaseURL}/api/v1/user/login`,
    {
      projectName,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
