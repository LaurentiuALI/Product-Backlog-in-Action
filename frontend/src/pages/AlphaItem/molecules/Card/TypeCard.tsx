export const TypeCard = ({ component }: any) => {
  return (
    <div className="border-2 border-white absolute bottom-0 right-0 w-100 h-3/6 flex flex-col items-center">
      <h1 className="font-semibold mt-4 mb-6 text-center text-2xl">
        {component.title}a
      </h1>
      <p className="text-center font-semibold text-l mb-10">
        {component.description}
      </p>
      {component.states.map((item: any) => (
        <div className="mb-3" key={item.name}>
          <h2 className="font-semibold text-xl">{item.name}</h2>
          <div className="h-px bg-primary-100 ml-4" />
        </div>
      ))}
    </div>
  );
};
