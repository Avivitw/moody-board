import Image from "next/image";
import Palette from "../components/Palette";

export default function Board() {
  return (
    <>
      <div class="flex flex-row bg-secondaryA">
        <div>
          <Image
            src="/6_21__Color_Bloom.png"
            alt="Picture of a moodboard"
            width={700}
            height={700}
          />
        </div>
        <div>
          <div class="div-board">MoodyBoard Name</div>
          <span class="m-8">Avivit Moodboard</span>
          <div class="div-board">Categories</div>
          <span class="m-8">Nordic, Living- room</span>
          <div class="div-board">Date created</div>
          <span class="m-8">8-18-2021</span>
        </div>
      </div>
      <h3 class="palette">Main colors palette</h3>
      <Palette></Palette>
    </>
  );
}
