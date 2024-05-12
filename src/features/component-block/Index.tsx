import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../infrastructure/firebase";
import RndBlcok from "./RndBlcok";

export default function ComponentBlock() {
  const [blocks, setBlocks] = useState<any>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "component-block");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setBlocks(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    <>
      {blocks.map((block: any) => (
        <div key={block.id}>
          <RndBlcok
            default={{
              width: block.width,
              height: block.height,
              x: block.x,
              y: block.y,
            }}
          />
        </div>
      ))}
    </>
  );
}
