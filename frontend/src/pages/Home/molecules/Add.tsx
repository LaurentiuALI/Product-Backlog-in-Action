import alpha from "../../../icons/alpha.svg";
import CustomCheckbox from "../atoms/CustomCheckbox";
import { addAlphaItem } from "../../../api/AlphaItemApi";
import { useMutation } from "react-query";
import { useState } from "react";

const Add: any = () => {
  const { mutate } = useMutation(addAlphaItem);

  const [name, setname] = useState("");
  const [UID, setUID] = useState("");
  const [storyPoints, setstoryPoints] = useState(1);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    console.log(UID);
    console.log(storyPoints);
    mutate({ name, UID, storyPoints });
  };

  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-2/4 h-5/6 rounded-3xl">
        <div className="flex flex-col items-center">
          <img src={alpha} className="h-16 m-10 opacity-90" />
          <h1 className="font-medium text-3xl text-center text-white opacity-80 mb-12">
            Time for a new
            <br />
            Product Backlog Item
          </h1>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={onSubmit}
          >
            <div className="w-8/12 mb-3">
              <label htmlFor="name" className="font-medium text-2xl text-white">
                Item Name
              </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="rounded-md w-full h-12 mt-2"
              />
            </div>

            <div className="w-8/12 mb-6">
              <label htmlFor="UID" className="font-medium text-2xl text-white ">
                UID
              </label>
              <input
                id="UID"
                name="UID"
                value={UID}
                onChange={(e) => setUID(e.target.value)}
                className="rounded-md w-full h-12 mt-2"
              />
            </div>
            <div className="w-8/12">
              <label
                htmlFor="description"
                className="font-medium text-2xl text-white flex "
              >
                Story Points
              </label>
              <div className="flex justify-evenly mt-2">
                <CustomCheckbox
                  onCustomClick={setstoryPoints}
                  number={1}
                ></CustomCheckbox>
                <CustomCheckbox
                  onCustomClick={setstoryPoints}
                  number={2}
                ></CustomCheckbox>
                <CustomCheckbox
                  onCustomClick={setstoryPoints}
                  number={3}
                ></CustomCheckbox>
                <CustomCheckbox
                  onCustomClick={setstoryPoints}
                  number={5}
                ></CustomCheckbox>
                <CustomCheckbox
                  onCustomClick={setstoryPoints}
                  number={8}
                ></CustomCheckbox>
              </div>
            </div>
            <input
              type="submit"
              value="Add"
              className="border-2 pl-8 pr-8 pt-2 pb-2 rounded-md mt-6 text-white font-semibold text-xl"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
