import Image from "next/image";
// import Palette from "../components/Palette";
import BoardInfo from "../components/BoardInfo";
import BoardStyle from "../components/BoardStyle";

export default function selectDesign() {
  return (
    <>
      <div class="flex flex-row bg-secondaryA  max-w-screen-lg mx-auto">
        <h1>Let's start...</h1>
        <p>First let's pick style that you love</p>
      </div>

      <BoardStyle></BoardStyle>
    </>
  );
}
