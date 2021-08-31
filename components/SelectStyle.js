import { useContext } from "react";
import { boardCreateContext } from "../providers/BoardProvider";

const SelectStyle = (props) => {
  const { styleId, setStyleId, steps, setSelectedStep } =
    useContext(boardCreateContext);

  let categories = props.designStyles.map((style) => {
    let classes = "overflow-hidden rounded-lg shadow-md m-8 border-2";
    if (styleId === style.id) {
      classes += " shadow-2xl border-primary";
    }
    return (
      <div
        className={classes}
        key={style.id}
        onClick={() => {
          setStyleId(style.id);
        }}
      >
        <img
          className="object-cover w-full h-80"
          src={style.image}
          alt={style.name}
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-primary">
            {style.name}
          </h4>
          <p className="leading-normal text-gray-700 mx-2 ">
            {style.description}
          </p>
        </div>
      </div>
    );
  });

  let selectedStyle = props.designStyles.find((style) => style.id === styleId);

  return (
    <>
      <h2 className="text-3xl font-semibold tracking-tight text-primary  ml-8">
        {!selectedStyle && "Select Style"}
        {selectedStyle && selectedStyle.name}
      </h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto">
        {categories}
      </div>
    </>
  );
};

export default SelectStyle;
