import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../infrastructure/firebase";

export default function ComponentBlock() {
  const [blocks, setBlocks] = useState<any>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
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
          id: {block.id} x: {block.x} y: {block.y} width: {block.width} height:{" "}
          {block.height}
        </div>
      ))}
    </>
  );
}
