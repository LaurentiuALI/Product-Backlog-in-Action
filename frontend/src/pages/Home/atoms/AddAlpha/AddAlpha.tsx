import add from "../../icons/add.svg";

const AddAlpha: React.FC<{ addActive: () => void }> = (props) => {
  return (
    <div className="flex flex-row justify-start items-center">
      <img
        src={add}
        alt="add"
        className="ml-10 opacity-90 mr-3"
        onClick={props.addActive}
      />
      <p
        className="text-lg text-white opacity-80 font-semibold font-inter"
        onClick={props.addActive}
      >
        Add Product Backlog Item
      </p>
    </div>
  );
};

export default AddAlpha;
