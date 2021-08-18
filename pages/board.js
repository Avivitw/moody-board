import Image from "next/image";

export default function Board() {
  return (
    <div>
      <div>
        <Image
          src="/6_21__Color_Bloom.png"
          alt="Picture of ta moodboard"
          width={700}
          height={700}
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
