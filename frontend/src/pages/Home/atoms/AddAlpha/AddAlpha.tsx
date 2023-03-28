import add from "../../icons/add.svg";

const AddAlpha = (props: any) => {
  const addActive = () => {
    props.addActive();
  };
  return (
    <div className="flex flex-row justify-start items-center">
      <img
        src={add}
        alt="add"
        className="ml-10 opacity-90 mr-3"
        onClick={() => addActive()}
      />
      <p
        className="text-lg text-white opacity-80 font-semibold font-inter"
        onClick={() => addActive()}
      >
        Add Product Backlog Item
      </p>
    </div>
  );
};

export default AddAlpha;
