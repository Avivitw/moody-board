import Image from "next/image";
// import Palette from "../components/Palette";
import BoardInfo from "../components/BoardInfo";
import BoardStyle from "../components/BoardStyle";

export default function selectDesign() {
  return (
    <>
      <div class="div-board">
        <h1 class=" text-2xl">Let's start...</h1>
      </div>
      <p class="m-4 text-xl max-w-screen-lg mx-auto">
        First let's pick style that you love
      </p>
      <div class="self-center max-w-screen-lg mx-auto">
        <Image
          class="max-w-screen-lg mx-auto self-center"
          src="/minimalist.jpeg"
          alt="minimalist design"
          width={700}
          height={700}
        />
      </div>

      <BoardStyle></BoardStyle>
    </>
  );
}
