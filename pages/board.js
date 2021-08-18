import Image from "next/image";

export default function Board() {
  return (
    <div>
      <div>
        <Image
          src="/6_21__Color_Bloom.png"
          alt="Picture of ta moodboard"
          width={500}
          height={500}
        />
        <div>
          <div>Name</div>
          <div>Categories</div>
          <div>Date created</div>
        </div>
      </div>
    </div>
  );
}
