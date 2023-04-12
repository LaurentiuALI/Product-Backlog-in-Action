const ListHeader = ({ header }: any) => {
  return (
    <>
      <div className="flex justify-center mt-4 font-bold text-xl border-b-2 border-primary-100 h-10">
        {header != null && header}
      </div>
      <div>
        <div className="flex items-center justify-evenly border-b-2 border-primary-100 h-20">
          <div className="basis-0 flex-grow flex-shrink ml-6 break-all mr-6 font-bold">
            <h2>Name</h2>
          </div>
          <div className="basis-0 flex-grow flex-shrink font-bold">
            <h3>Story Points</h3>
          </div>
          <div className="basis-0 flex-grow flex-shrink font-bold">
            <h4>State</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListHeader;
