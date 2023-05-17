import waveup from "./icons/waveup.svg";
import wavedown from "./icons/wavedown.svg";
import pbiIcon from "./icons/pbIcon.svg";
import { useState } from "react";
import { createUser } from "../../api/UserApi";
import { useMutation } from "react-query";
import { useUserStore, type IUser } from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";

interface IDataError {
  mssg: string;
  projectName: string;
}

interface IData {
  data?: IDataError;
}

interface IError {
  response?: IData;
}

const Register = () => {
  const navigate = useNavigate();

  const { setUser } = useUserStore();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation(createUser, {
    onSuccess: (response) => {
      setName("");
      setPassword("");
      const responseUser = {
        token: (response.data as IDataError).mssg,
        projectName: (response.data as IUser).projectName,
      };

      localStorage.setItem("user", JSON.stringify(responseUser));
      setUser(responseUser as IUser);
      navigate("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ projectName: name, password });
  };

  return (
    <div className="bg-gray-300 h-[100vh] w-screen overflow-hidden relative flex items-center justify-center">
      <img src={waveup} alt="" className="w-full h-auto absolute top-0 z-0" />

      <div className="h-[40rem] w-[40rem] bg-white bg-opacity-80 absolute z-10">
        <form
          className="flex flex-col items-center mt-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <img src={pbiIcon} alt="" />
          <label className="text-gray-500 mt-20 flex flex-col">
            Project Name
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Please enter project name..."
              className="pl-2 rounded-lg w-[20rem] h-[2rem] mt-2 focus:outline-none focus:border-2 focus:border-orange-400"
            />
          </label>
          <label className="text-gray-500 mt-4 flex flex-col">
            Project password
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Please enter project name..."
              className="pl-2 rounded-lg w-[20rem] h-[2rem] mt-2 focus:outline-none focus:border-2 focus:border-orange-400"
            />
          </label>
          <button className="bg-orange-400 rounded-lg w-[20rem] h-[2rem] mt-4 text-white font-bold">
            Register
          </button>
          {mutation.isError && (
            <p className="text-red-500 mt-4">
              {((mutation.error as IError).response as IData).data?.mssg}
            </p>
          )}
          {mutation.isSuccess && (
            <p className="text-green-500 mt-4">Succesfully created</p>
          )}
          <p className="mt-4">
            Already have a project?
            <span
              className="text-primary-100 ml-2 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in!
            </span>
          </p>
        </form>
      </div>

      <img
        src={wavedown}
        alt=""
        className="w-full h-auto absolute bottom-0 z-0"
      />
    </div>
  );
};

export default Register;
