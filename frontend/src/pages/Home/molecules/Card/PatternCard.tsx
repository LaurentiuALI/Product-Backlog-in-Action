export const PatternCard = ({ component }: any) => {
  let text = component.description.split("\\n");

  return (
    <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-center text-2xl">
          {component != null && component.title}
        </h1>

        <h2 className="font-medium text-xs">
          {component != null &&
            text.map((item: any) => {
              return <p key={item}>{item}</p>;
            })}
        </h2>
      </div>
    </div>
  );
};
