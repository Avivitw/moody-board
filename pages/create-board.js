import SelectStyle from "../components/SelectStyle";
import BoardProvider from "../providers/BoardProvider";

import { PrismaClient } from "@prisma/client";

export default function CreateBoard(props) {
  return (
    <BoardProvider>
      <InnerCreateBoard designStyles={props.designStyles}></InnerCreateBoard>
    </BoardProvider>
  );
}

function InnerCreateBoard(props) {
  return (
    <>
      <SelectStyle designStyles={props.designStyles}></SelectStyle>
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
