import { PrismaClient, Prisma } from "@prisma/client";

import Image from "next/image";
// import Palette from "../components/Palette";
import BoardInfo from "../components/BoardInfo";
import BoardStyle from "../components/BoardStyle";

export default function selectDesign(props) {
  return (
    <>
      <div class="div-board">
        <h1 class=" text-2xl">Let's start...</h1>
      </div>
      <p class="m-4 text-xl max-w-screen-lg mx-auto">
        First let's pick style that you love
      </p>

      <BoardStyle designStyles={props.designStyles}></BoardStyle>
    </>
  );
}

export async function getStaticProps(context) {
  const prisma = new PrismaClient();

  const cat = await prisma.category.findMany({
    where: {
      parentId: 1,
    },
  });
  // console.log(cat);
  return {
    props: {
      designStyles: cat,
    },
  };
}
