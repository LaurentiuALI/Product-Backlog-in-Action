interface ListHeaderProps {
  header?: string;
  totalIssues?: number;
  actualIssuesNumber?: number;
}

const ListHeader = ({
  header,
  totalIssues,
  actualIssuesNumber,
}: ListHeaderProps) => {
  return (
    <>
      <div className="flex justify-between mt-4 ml-2 font-bold text-3xl h-10 text-primary-100">
        <p>{header != null && header}</p>
        <div className="flex">
          <p>{actualIssuesNumber != null && actualIssuesNumber} / </p>
          <p className="ml-2 items-center mr-2"> {totalIssues} items</p>
        </div>
      </div>
    </>
  );
};

export default ListHeader;
