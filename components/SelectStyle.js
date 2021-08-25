import Image from "next/image";

const SelectStyle = (props) => {
  let categories = props.designStyles.map((style) => {
    return (
      <div
        className=" overflow-hidden rounded-lg shadow-lg m-8 "
        key={style.id}
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

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto">
      {categories}
    </div>
  );
};

export default SelectStyle;
