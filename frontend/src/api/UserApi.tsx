import axios from "axios";

export const createUser = async ({
  projectName,
  password,
}: {
  projectName: string;
  password: string;
}) => {
  const response = await axios.post(
    "http://localhost:4000/api/v1/user/register",
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
    "http://localhost:4000/api/v1/user/login",
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
