import Image from "next/image";

const BoardStyle = (props) => {
  let categories = props.designStyles.map((style) => {
    return (
      <>
        <div class="m-4 text-2xl max-w-screen-lg mx-auto">{style.name}</div>
        <p class="max-w-screen-lg mx-auto">{style.description}</p>
        <div class="self-center max-w-screen-lg mx-auto">
          <Image
            class="max-w-screen-lg mx-auto self-center"
            src={style.image}
            alt={style.name}
            width={300}
            height={300}
          />
        </div>
      </>
    );
  });

  return (
    <div>
      <div class=" text-2xl max-w-screen-lg mx-auto text-primary">
        Design - Style
      </div>
      <div>{categories}</div>
    </div>
  );
};

export default BoardStyle;
