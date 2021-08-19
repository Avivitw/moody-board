import Image from "next/image";
import Palette from "../components/Palette";

export default function Board() {
  const samplePalette = [
    {
      moodBoardId: 1,
      r: 174,
      g: 191,
      b: 115,
    },
    {
      moodBoardId: 1,
      r: 70,
      g: 85,
      b: 79,
    },
    {
      moodBoardId: 1,
      r: 241,
      g: 175,
      b: 121,
    },
    {
      moodBoardId: 1,
      r: 251,
      g: 214,
      b: 171,
    },
    {
      moodBoardId: 1,
      r: 250,
      g: 228,
      b: 216,
    },
    {
      moodBoardId: 1,
      r: 251,
      g: 234,
      b: 233,
    },
  ];
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
      <Palette colors={samplePalette}></Palette>
    </>
  );
}
