export const TypeCard = ({ component }: any) => {
  let text;
  if (component.description.includes("\\n")) {
    text = component.description.split("\\n");
  }
  return (
    <div className="bg-white absolute bottom-0 right-0 w-[25rem] h-[30rem] rounded-t-xl mr-4 flex flex-col items-center justify-around">
      <h1 className=" font-bold mt-14 text-center text-2xl">
        {component.title}
      </h1>
      <p className="text-center font-semibold text-lg mb-6 mt-10 pr-8 pl-8">
        {typeof text == "object"
          ? text.map((item: any) => {
              return (
                <p className="text-[1rem]" key={item}>
                  {item}
                </p>
              );
            })
          : component.description}
      </p>
      {component.states.map((item: any) => (
        <div className="mb-3 mt-3" key={item.name}>
          <h2 className="underline decoration-primary-100 decoration-2 font-semibold text-2xl text-center">
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
};
