import { useState, useEffect } from "react";
import { db } from "./infrastructure/firebase";
import { collection, getDocs } from "firebase/firestore";
import ComponentBlock from "./features/component-block/Index";

function App() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  return (
    // <div>
    //   {users.map((user: any) => (
    //     <div key={user.id}>{user.name}</div>
    //   ))}
    // </div>
    <>
      <ComponentBlock />
    </>
  );
}

export default App;
