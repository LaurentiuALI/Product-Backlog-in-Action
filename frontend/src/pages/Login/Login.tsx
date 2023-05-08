import waveup from "./icons/waveup.svg";
import wavedown from "./icons/wavedown.svg";
import pbiIcon from "./icons/pbIcon.svg";

const Login = () => {
  return (
    <div className="bg-gray-300 h-[100vh] w-screen overflow-hidden relative flex items-center justify-center">
      <img src={waveup} alt="" className="w-full h-auto absolute top-0 z-0" />
      <div className="h-[40rem] w-[40rem] bg-white bg-opacity-80 absolute z-10">
        <div className="flex flex-col items-center mt-6">
          <img src={pbiIcon} alt="" />
          <label className="text-gray-500 mt-20 flex flex-col">
            Project Name
            <input
              placeholder="Please enter project name..."
              className="rounded-lg w-[20rem] h-[2rem] mt-2 focus:outline-none focus:border-2 focus:border-orange-400"
            />
          </label>
          <label className="text-gray-500 mt-4 flex flex-col">
            Project password
            <input
              placeholder="Please enter project name..."
              className="rounded-lg w-[20rem] h-[2rem] mt-2 focus:outline-none focus:border-2 focus:border-orange-400"
            />
          </label>
        </div>
      </div>
      <img
        src={wavedown}
        alt=""
        className="w-full h-auto absolute bottom-0 z-0"
      />
    </div>
  );
};

export default Login;
