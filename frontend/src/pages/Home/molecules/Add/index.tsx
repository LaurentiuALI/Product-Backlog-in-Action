import alpha from "../../icons/alpha.svg";
import CustomCheckbox from "../../atoms/CustomCheckbox";
import { addAlphaItem } from "../../../../api/AlphaItemApi";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { useUserStore } from "../../../../stores/UserStore";

const Add: React.FC<{ toggleAdd: () => void }> = ({ toggleAdd }) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  const { mutate } = useMutation(addAlphaItem, {
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["alphaItems"] });
    },
    onSuccess: () => {
      toggleAdd();
    },
  });

  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [storyPoints, setstoryPoints] = useState(1);
  const [error, setError] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setError("");
    if (description.length > 256) {
      setError("Description is too long");
      return;
    }
    if (name.length < 3) {
      setError("Name is too short");
      return;
    }
    if (name.length > 255) {
      setError("Name is too long");
      return;
    }
    setname("");
    setDescription("");
    setstoryPoints(1);
    mutate({ name, description: description, storyPoints, user });
  };

  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-[50rem] h-[45rem] 4k:w-[70rem] 4k:h-[60rem] rounded-3xl">
        <div className="flex flex-col items-center">
          <img src={alpha} className="h-16 m-10 opacity-90" />
          <h1 className="font-medium text-3xl text-center text-white opacity-80 mb-4 ">
            Time for a new
            <br />
            Product Backlog Item
          </h1>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={onSubmit}
          >
            <div className="w-8/12 mb-3 4k:mt-12">
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
            <div className="w-8/12 mb-6 4k:mt-12">
              <label
                htmlFor="description"
                className="font-medium text-2xl text-white "
              >
                Description
              </label>
              <input
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="rounded-md w-full h-12 mt-2"
              />
            </div>
            <div className="w-8/12 4k:mt-12">
              <p className="font-medium text-2xl text-white flex ">
                Story Points
              </p>
              <div id="storyPoints" className="flex justify-evenly mt-2 ">
                {[1, 2, 3, 5, 8].map((number) => (
                  <CustomCheckbox
                    key={number}
                    number={number}
                    onCustomClick={setstoryPoints}
                  />
                ))}
              </div>
            </div>
            <input
              type="submit"
              value="Add"
              className="border-2 pl-8 pr-8 pt-2 pb-2 rounded-md mt-6 text-white font-semibold text-xl 4k:mt-32 4k:text-4xl"
            ></input>
            {error && (
              <p className="text-white opacity-100 text-2xl font-bold mt-2">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
