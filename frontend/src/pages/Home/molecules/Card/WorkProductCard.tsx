export const WorkProductCard = ({ component }: any) => {
  return (
    <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
      <div className="flex flex-col items-center">
        <h1 className="font-bold mt-4 mb-6 text-2xl">{component.title}</h1>

        <h2 className="text-center font-semibold text-l mb-10">
          {component != null && component.description}
        </h2>

        {component.states.map((item: any) => {
          return (
            <div className="mb-3" key={item.name}>
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <div className="h-px bg-primary-100 ml-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
