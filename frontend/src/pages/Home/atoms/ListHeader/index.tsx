interface ListHeaderProps {
  header?: string;
}

const ListHeader = ({ header }: ListHeaderProps) => {
  return (
    <>
      <div className="flex mt-4 ml-2 font-bold text-3xl h-10 text-primary-100">
        {header != null && header}
      </div>
    </>
  );
};

export default ListHeader;
