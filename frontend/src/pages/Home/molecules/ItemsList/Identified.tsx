import ItemEntry from "../../atoms/ItemEntry";
import ListHeader from "../../atoms/ListHeader";

const Identified = ({ entries }: any) => {
  return (
    entries && (
      <div className="min-w-[35vw]">
        <ListHeader header={entries[0] != null ? entries[0].state : null} />
        {entries &&
          entries.map((item: any) => <ItemEntry item={item} key={item._id} />)}
      </div>
    )
  );
};

export default Identified;
