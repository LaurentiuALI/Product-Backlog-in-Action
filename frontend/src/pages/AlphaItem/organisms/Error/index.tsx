import waveup from "../../icons/waveup.svg";
import wavedown from "../../icons/wavedown.svg";
import pbiIcon from "../../icons/pbiIcon.svg";
import { useNavigate } from "react-router-dom";
const Error = ({ error }: { error: string | undefined }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300 h-[100vh] w-screen overflow-hidden relative flex items-center justify-center">
      <img src={waveup} alt="" className="w-full h-auto absolute top-0 z-0" />

      <div className="h-[40rem] w-[40rem] bg-white bg-opacity-80 absolute z-10 flex flex-col items-center">
        <img src={pbiIcon} alt="" className="h-40 w-full mt-20 mb-20" />
        <div className="flex flex-col items-center">
          <h1 className="text-black text-xl font-bold mb-4">
            An error has occured processing this issue:
          </h1>
          <p className="text-primary-100 text-2xl font-bold mb-2">{error}</p>
          <button
            className="bg-orange-400 rounded-lg w-[5rem] h-[2rem] text-white font-bold"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </div>

      <img
        src={wavedown}
        alt=""
        className="w-full h-auto absolute bottom-0 z-0 fill-primary-200"
      />
    </div>
  );
};

export default Error;
